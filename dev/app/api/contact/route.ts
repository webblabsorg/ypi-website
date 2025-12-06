import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { sendContactNotification } from '@/lib/api/email';
import { departmentEmails } from '@/lib/config/env';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json();

    // Validate with Zod
    const validatedData = contactSchema.parse(body);

    // Route to appropriate department email based on category
    const categoryEmailMap: Record<string, string> = {
      quote: departmentEmails.sales,
      partnership: departmentEmails.partnerships,
      supplier: departmentEmails.procurement,
      career: departmentEmails.hr,
      media: departmentEmails.media,
      general: departmentEmails.general,
    };

    const toEmail = categoryEmailMap[validatedData.category] || departmentEmails.general;

    // Send email notification
    const emailResult = await sendContactNotification(validatedData, toEmail);

    if (!emailResult.success) {
      console.error('Failed to send contact email:', emailResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. Our team will respond within 24-48 hours.',
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

    console.error('Contact API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process contact form. Please try again later.',
    }, { status: 500 });
  }
}
