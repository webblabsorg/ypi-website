/**
 * AI Search API Route
 * Provides semantic search over website content
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchRequestSchema } from '@/lib/validations/ai';
import { queryDocuments } from '@/lib/ai/vector-store';
import { isAIFeaturesEnabled, aiConfig } from '@/lib/config/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Check if AI search is enabled
    if (!aiConfig.enableAISearch || !isAIFeaturesEnabled()) {
      return NextResponse.json(
        {
          success: false,
          error: 'AI search is currently not available.',
        },
        { status: 503 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = searchRequestSchema.safeParse(body);

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

    const { query, filters, limit } = validation.data;

    // Build filter object for Pinecone
    const pineconeFilter: Record<string, string> = {};
    if (filters?.type) {
      pineconeFilter.type = filters.type;
    }
    if (filters?.category) {
      pineconeFilter.category = filters.category;
    }

    // Perform vector search
    const results = await queryDocuments(query, {
      topK: limit,
      filter: Object.keys(pineconeFilter).length > 0 ? pineconeFilter : undefined,
    });

    // Format results for response
    const formattedResults = results.map((doc) => ({
      id: doc.id,
      title: doc.title,
      snippet: doc.content.substring(0, 200) + (doc.content.length > 200 ? '...' : ''),
      url: doc.url,
      source: doc.source,
      type: doc.type,
      score: doc.metadata?.relevanceScore || 0,
    }));

    return NextResponse.json({
      success: true,
      query,
      results: formattedResults,
      count: formattedResults.length,
    });
  } catch (error) {
    console.error('AI search error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Search request failed. Please try again.',
      },
      { status: 500 }
    );
  }
}

// GET handler for simple queries via URL params
export async function GET(request: NextRequest) {
  try {
    // Check if AI search is enabled
    if (!aiConfig.enableAISearch || !isAIFeaturesEnabled()) {
      return NextResponse.json(
        {
          success: false,
          error: 'AI search is currently not available.',
        },
        { status: 503 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q') || searchParams.get('query');
    const typeParam = searchParams.get('type');
    const limitParam = searchParams.get('limit');

    if (!query) {
      return NextResponse.json(
        {
          success: false,
          error: 'Query parameter is required',
        },
        { status: 400 }
      );
    }

    const validation = searchRequestSchema.safeParse({
      query,
      filters: typeParam ? { type: typeParam } : undefined,
      limit: limitParam ? parseInt(limitParam, 10) : 10,
    });

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request parameters',
          details: validation.error.errors,
        },
        { status: 400 }
      );
    }

    const { query: validatedQuery, filters, limit } = validation.data;

    // Build filter object
    const pineconeFilter: Record<string, string> = {};
    if (filters?.type) {
      pineconeFilter.type = filters.type;
    }

    // Perform vector search
    const results = await queryDocuments(validatedQuery, {
      topK: limit,
      filter: Object.keys(pineconeFilter).length > 0 ? pineconeFilter : undefined,
    });

    // Format results
    const formattedResults = results.map((doc) => ({
      id: doc.id,
      title: doc.title,
      snippet: doc.content.substring(0, 200) + (doc.content.length > 200 ? '...' : ''),
      url: doc.url,
      source: doc.source,
      type: doc.type,
      score: doc.metadata?.relevanceScore || 0,
    }));

    return NextResponse.json({
      success: true,
      query: validatedQuery,
      results: formattedResults,
      count: formattedResults.length,
    });
  } catch (error) {
    console.error('AI search error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Search request failed. Please try again.',
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
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
