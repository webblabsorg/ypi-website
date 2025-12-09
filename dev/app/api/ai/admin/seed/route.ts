import { NextRequest, NextResponse } from 'next/server';
import { buildKnowledgeBaseDocuments } from '@/lib/ai/knowledge-base';
import { ensureInitialIndex, isVectorStoreAvailable } from '@/lib/ai/vector-store';
import { isAIFeaturesEnabled } from '@/lib/config/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    if (!isAIFeaturesEnabled() || !isVectorStoreAvailable()) {
      return NextResponse.json(
        {
          success: false,
          error: 'AI features or vector store are not configured. Please set OPENAI_API_KEY, PINECONE_API_KEY, PINECONE_ENVIRONMENT, and related variables.',
        },
        { status: 500 }
      );
    }

    const adminToken = process.env.AI_ADMIN_TOKEN;
    if (adminToken) {
      const headerToken = req.headers.get('x-admin-token');
      if (headerToken !== adminToken) {
        return NextResponse.json(
          {
            success: false,
            error: 'Unauthorized',
          },
          { status: 401 }
        );
      }
    }

    const documents = buildKnowledgeBaseDocuments();
    await ensureInitialIndex(documents);

    return NextResponse.json(
      {
        success: true,
        message: 'Knowledge base seeded successfully',
        count: documents.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('AI knowledge base seeding error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to seed knowledge base. Check server logs for details.',
      },
      { status: 500 }
    );
  }
}
