/**
 * Document Intelligence API Route (Admin/Dev Only)
 * Query documents and extract specific information
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { queryDocuments } from '@/lib/ai/vector-store';
import { getOpenAIClient, getModelName } from '@/lib/ai/openai';
import { isAIFeaturesEnabled } from '@/lib/config/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const documentQuerySchema = z.object({
  query: z.string().min(3).max(500),
  documentIds: z.array(z.string()).optional(),
  extractionType: z.enum(['summary', 'facts', 'specifications', 'custom']).optional().default('summary'),
  adminToken: z.string().optional(), // Simple auth for dev/admin access
});

/**
 * Simple admin authentication
 * In production, replace with proper auth system
 */
function isAuthorized(token?: string): boolean {
  const ADMIN_TOKEN = process.env.AI_ADMIN_TOKEN;
  
  // If no admin token is set, allow access in development only
  if (!ADMIN_TOKEN) {
    return process.env.NODE_ENV === 'development';
  }
  
  return token === ADMIN_TOKEN;
}

export async function POST(request: NextRequest) {
  try {
    // Check if AI features are enabled
    if (!isAIFeaturesEnabled()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Document intelligence is currently not available.',
        },
        { status: 503 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = documentQuerySchema.safeParse(body);

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

    const { query, documentIds, extractionType, adminToken } = validation.data;

    // Check authorization
    if (!isAuthorized(adminToken)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized. This endpoint requires admin access.',
        },
        { status: 401 }
      );
    }

    // Query documents
    const documents = await queryDocuments(query, {
      topK: documentIds ? documentIds.length : 5,
    });

    // Filter by specific document IDs if provided
    const targetDocuments = documentIds
      ? documents.filter((doc) => documentIds.includes(doc.id))
      : documents;

    if (targetDocuments.length === 0) {
      return NextResponse.json({
        success: true,
        query,
        extraction: 'No relevant documents found.',
        documents: [],
      });
    }

    // Build extraction prompt based on type
    const extractionPrompts: Record<string, string> = {
      summary: 'Provide a concise summary of the key information in these documents.',
      facts: 'Extract and list the key facts, figures, and data points from these documents.',
      specifications: 'Extract technical specifications, capabilities, and requirements from these documents.',
      custom: 'Answer the query based on the information in these documents.',
    };

    // Prepare context from documents
    const context = targetDocuments
      .map((doc, idx) => `[Document ${idx + 1}: ${doc.title}]\n${doc.content}`)
      .join('\n\n---\n\n');

    // Generate extraction using OpenAI
    const openai = getOpenAIClient();

    const completion = await openai.chat.completions.create({
      model: getModelName(),
      messages: [
        {
          role: 'system',
          content: `You are a document intelligence assistant for Yellow Power International. ${extractionPrompts[extractionType]}`,
        },
        {
          role: 'user',
          content: `Context:\n\n${context}\n\n---\n\nQuery: ${query}`,
        },
      ],
      max_tokens: 800,
      temperature: 0.3, // Lower temperature for factual extraction
    });

    const extraction = completion.choices[0]?.message?.content || 'Unable to extract information.';

    return NextResponse.json({
      success: true,
      query,
      extractionType,
      extraction,
      documents: targetDocuments.map((doc) => ({
        id: doc.id,
        title: doc.title,
        type: doc.type,
        url: doc.url,
      })),
      model: getModelName(),
    });
  } catch (error) {
    console.error('Document intelligence error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Document query failed. Please try again.',
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
