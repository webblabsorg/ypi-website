import { NextRequest, NextResponse } from 'next/server';
import { quoteSchema } from '@/lib/validations/quote';
import { sendQuoteNotification } from '@/lib/api/email';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json();

    // Validate with Zod
    const validatedData = quoteSchema.parse(body);

    // Send email notification
    const emailResult = await sendQuoteNotification(validatedData);

    if (!emailResult.success) {
      console.error('Failed to send quote email:', emailResult.error);
      // Still return success to user, log the error
    }

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully. Our team will contact you within 24-48 hours.',
    }, { status: 200 });

  } catch (error) {
    // Handle Zod validation errors
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

    // Handle other errors
    console.error('Quote API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process quote request. Please try again later.',
    }, { status: 500 });
  }
}
