/**
 * PowerBot Chat API Route
 * Handles AI-powered chat interactions with RAG
 */

import { NextRequest, NextResponse } from 'next/server';
import { chatRequestSchema } from '@/lib/validations/ai';
import { performRetrieval } from '@/lib/ai/retrieval';
import { isAIFeaturesEnabled, aiConfig } from '@/lib/config/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Rate limiting (simple in-memory implementation)
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Check if AI features are enabled
    if (!aiConfig.enablePowerBot || !isAIFeaturesEnabled()) {
      return NextResponse.json(
        {
          success: false,
          error: 'PowerBot is currently not available. Please try again later or contact us directly.',
        },
        { status: 503 }
      );
    }

    // Rate limiting (use IP address as identifier)
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a moment before trying again.',
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = chatRequestSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request format',
          details: validation.error.errors,
        },
        { status: 400 }
      );
    }

    const { messages, persona } = validation.data;

    // Get the last user message as the query
    const userMessages = messages.filter((m) => m.role === 'user');
    if (userMessages.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'No user message found',
        },
        { status: 400 }
      );
    }

    const latestUserMessage = userMessages[userMessages.length - 1];

    // Check message length
    if (latestUserMessage.content.length > 500) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message is too long. Please keep messages under 500 characters.',
        },
        { status: 400 }
      );
    }

    // Perform retrieval and generate response
    const result = await performRetrieval(latestUserMessage.content, {
      persona,
      topK: 5,
      maxTokens: 500,
    });

    return NextResponse.json({
      success: true,
      answer: result.answer,
      sources: result.sources.map((doc) => ({
        title: doc.title,
        url: doc.url,
        source: doc.source,
        type: doc.type,
      })),
      model: result.model,
    });
  } catch (error) {
    console.error('PowerBot chat error:', error);

    // Don't expose internal error details to users
    return NextResponse.json(
      {
        success: false,
        error:
          'I apologize, but I encountered an error processing your request. Please try again or contact us directly at +233268066942.',
      },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
