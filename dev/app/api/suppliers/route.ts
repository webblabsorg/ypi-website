import { NextRequest, NextResponse } from 'next/server';
import { supplierSchema } from '@/lib/validations/supplier';
import { sendEmail } from '@/lib/api/email';
import { departmentEmails } from '@/lib/config/env';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = supplierSchema.parse(body);

    const html = `
      <h2>New Supplier Registration</h2>
      <p><strong>Company:</strong> ${validatedData.companyName}</p>
      <p><strong>Registration Number:</strong> ${validatedData.registrationNumber}</p>
      <p><strong>Contact:</strong> ${validatedData.contactName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <p><strong>Address:</strong> ${validatedData.address}</p>
      ${validatedData.website ? `<p><strong>Website:</strong> ${validatedData.website}</p>` : ''}
      <p><strong>Product Categories:</strong> ${validatedData.productCategories.join(', ')}</p>
      <p><strong>Years in Business:</strong> ${validatedData.yearsInBusiness}</p>
      <h3>Capabilities:</h3>
      <p>${validatedData.capabilities}</p>
      ${validatedData.certifications ? `<h3>Certifications:</h3><p>${validatedData.certifications}</p>` : ''}
      ${validatedData.references ? `<h3>References:</h3><p>${validatedData.references}</p>` : ''}
    `;

    await sendEmail({
      to: departmentEmails.procurement,
      subject: `New Supplier Registration from ${validatedData.companyName}`,
      html,
      replyTo: validatedData.email,
    });

    return NextResponse.json({
      success: true,
      message: 'Supplier registration submitted successfully. Our procurement team will review your application.',
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

    console.error('Supplier API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process supplier registration. Please try again later.',
    }, { status: 500 });
  }
}
