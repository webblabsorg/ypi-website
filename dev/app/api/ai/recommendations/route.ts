/**
 * AI Recommendations API Route
 * Provides content recommendations based on current page
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { queryDocuments } from '@/lib/ai/vector-store';
import { isAIFeaturesEnabled, aiConfig } from '@/lib/config/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const recommendationRequestSchema = z.object({
  currentPage: z.string().min(1),
  currentType: z.enum(['service', 'project', 'career', 'about', 'sustainability', 'general']).optional(),
  limit: z.number().int().positive().max(10).optional().default(3),
});

export async function POST(request: NextRequest) {
  try {
    // Check if AI features are enabled
    if (!aiConfig.enableAISearch || !isAIFeaturesEnabled()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Recommendations are currently not available.',
        },
        { status: 503 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = recommendationRequestSchema.safeParse(body);

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

    const { currentPage, limit } = validation.data;

    // Query for related content based on current page
    const results = await queryDocuments(currentPage, {
      topK: limit + 2, // Get extra to filter out current page
    });

    // Format recommendations (exclude exact current page if detected)
    const recommendations = results
      .filter((doc) => !doc.url.includes(currentPage)) // Simple exclusion
      .slice(0, limit)
      .map((doc) => ({
        id: doc.id,
        title: doc.title,
        snippet: doc.content.substring(0, 150) + (doc.content.length > 150 ? '...' : ''),
        url: doc.url,
        type: doc.type,
      }));

    return NextResponse.json({
      success: true,
      currentPage,
      recommendations,
      count: recommendations.length,
    });
  } catch (error) {
    console.error('AI recommendations error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate recommendations.',
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
