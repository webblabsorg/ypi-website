import { NextRequest, NextResponse } from 'next/server';
import { applicationSchema } from '@/lib/validations/application';
import { sendEmail } from '@/lib/api/email';
import { uploadCvFile, validateFile } from '@/lib/api/uploads';
import { departmentEmails } from '@/lib/config/env';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = applicationSchema.parse(body);

    let cvUrl = validatedData.cvUrl;
    
    // Handle CV upload if provided as base64
    if (body.cvFileData && body.cvFileName) {
      // Validate file
      const validation = validateFile({
        type: body.cvFileType || 'application/pdf',
        size: body.cvFileSize || 0,
      });

      if (!validation.valid) {
        return NextResponse.json({
          success: false,
          error: validation.error,
        }, { status: 400 });
      }

      // Upload to Cloudinary
      const uploadResult = await uploadCvFile(body.cvFileData, body.cvFileName);
      
      if (uploadResult.success && uploadResult.url) {
        cvUrl = uploadResult.url;
      } else {
        console.warn('CV upload failed, proceeding without file:', uploadResult.error);
      }
    }

    const html = `
      <h2>New Job Application</h2>
      <p><strong>Position:</strong> ${validatedData.positionApplying}</p>
      <p><strong>Job ID:</strong> ${validatedData.jobId}</p>
      <hr />
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <p><strong>Address:</strong> ${validatedData.address}</p>
      <h3>Professional Information</h3>
      <p><strong>Years of Experience:</strong> ${validatedData.yearsOfExperience}</p>
      ${validatedData.currentEmployer ? `<p><strong>Current Employer:</strong> ${validatedData.currentEmployer}</p>` : ''}
      <p><strong>Education:</strong> ${validatedData.education}</p>
      ${cvUrl ? `<p><strong>CV:</strong> <a href="${cvUrl}">Download CV</a></p>` : ''}
      <h3>Cover Letter</h3>
      <p>${validatedData.coverLetter}</p>
      ${validatedData.startDate ? `<p><strong>Available Start Date:</strong> ${validatedData.startDate}</p>` : ''}
      ${validatedData.expectedSalary ? `<p><strong>Expected Salary:</strong> ${validatedData.expectedSalary}</p>` : ''}
      ${validatedData.references ? `<h3>References</h3><p>${validatedData.references}</p>` : ''}
    `;

    // Send to HR
    await sendEmail({
      to: departmentEmails.hr,
      subject: `New Application: ${validatedData.positionApplying} - ${validatedData.firstName} ${validatedData.lastName}`,
      html,
      replyTo: validatedData.email,
    });

    // Send confirmation to applicant
    await sendEmail({
      to: validatedData.email,
      subject: 'Application Received - Yellow Power International',
      html: `
        <h2>Application Received</h2>
        <p>Dear ${validatedData.firstName},</p>
        <p>Thank you for applying for the <strong>${validatedData.positionApplying}</strong> position at Yellow Power International.</p>
        <p>We have received your application and our HR team will review it carefully. We will contact you if your qualifications match our requirements.</p>
        <p>Best regards,<br/>Yellow Power International HR Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully. You will receive a confirmation email shortly.',
      cvUrl,
    }, { status: 200 });

  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        details: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      }, { status: 400 });
    }

    console.error('Application API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process application. Please try again later.',
    }, { status: 500 });
  }
}
