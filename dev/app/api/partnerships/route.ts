import { NextRequest, NextResponse } from 'next/server';
import { partnershipSchema } from '@/lib/validations/partnership';
import { sendEmail } from '@/lib/api/email';
import { departmentEmails } from '@/lib/config/env';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = partnershipSchema.parse(body);

    const html = `
      <h2>New Partnership Application</h2>
      <p><strong>Company:</strong> ${validatedData.companyName}</p>
      <p><strong>Contact:</strong> ${validatedData.contactName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      ${validatedData.website ? `<p><strong>Website:</strong> ${validatedData.website}</p>` : ''}
      <p><strong>Partnership Type:</strong> ${validatedData.partnershipType}</p>
      <p><strong>Industry:</strong> ${validatedData.industry}</p>
      ${validatedData.timeline ? `<p><strong>Timeline:</strong> ${validatedData.timeline}</p>` : ''}
      <h3>Proposal Summary:</h3>
      <p>${validatedData.proposalSummary}</p>
      <h3>Expected Outcomes:</h3>
      <p>${validatedData.expectedOutcomes}</p>
    `;

    await sendEmail({
      to: departmentEmails.partnerships,
      subject: `New Partnership Application from ${validatedData.companyName}`,
      html,
      replyTo: validatedData.email,
    });

    return NextResponse.json({
      success: true,
      message: 'Partnership application submitted successfully. Our business development team will review and contact you.',
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

    console.error('Partnership API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process partnership application. Please try again later.',
    }, { status: 500 });
  }
}
