import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations/newsletter';
import { sendEmail } from '@/lib/api/email';
import { emailConfig } from '@/lib/config/env';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json();

    // Validate with Zod
    const validatedData = newsletterSchema.parse(body);

    // Send notification email (in future, integrate with email marketing service)
    await sendEmail({
      to: emailConfig.toEmail,
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><em>Note: Add this email to your newsletter distribution list.</em></p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
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

    console.error('Newsletter API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to subscribe. Please try again later.',
    }, { status: 500 });
  }
}
