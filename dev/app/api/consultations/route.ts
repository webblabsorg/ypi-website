import { NextRequest, NextResponse } from 'next/server';
import { consultationSchema } from '@/lib/validations/consultation';
import { sendEmail } from '@/lib/api/email';
import { departmentEmails } from '@/lib/config/env';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = consultationSchema.parse(body);

    const html = `
      <h2>New Consultation Booking Request</h2>
      <p><strong>From:</strong> ${validatedData.fullName} (${validatedData.company})</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <p><strong>Topic:</strong> ${validatedData.consultationTopic}</p>
      <p><strong>Preferred Date:</strong> ${validatedData.preferredDate}</p>
      <p><strong>Preferred Time:</strong> ${validatedData.preferredTime}</p>
      <h3>Message:</h3>
      <p>${validatedData.message}</p>
    `;

    await sendEmail({
      to: departmentEmails.sales,
      subject: `New Consultation Request from ${validatedData.fullName}`,
      html,
      replyTo: validatedData.email,
    });

    return NextResponse.json({
      success: true,
      message: 'Consultation request submitted successfully. We will contact you to confirm the appointment.',
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

    console.error('Consultation API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process consultation request. Please try again later.',
    }, { status: 500 });
  }
}
