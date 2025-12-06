/**
 * Vector store utilities for Pinecone integration
 * Handles document indexing and similarity search
 */

import { Pinecone } from '@pinecone-database/pinecone';
import { aiConfig, isPineconeConfigured } from '@/lib/config/env';
import { getOpenAIClient } from './openai';
import type { AiDocument, DocumentType } from './documents';
import { extractTextForEmbedding } from './documents';

let pineconeClient: Pinecone | null = null;

/**
 * Get configured Pinecone client (singleton)
 */
export function getPineconeClient(): Pinecone {
  if (!isPineconeConfigured()) {
    throw new Error(
      'Pinecone is not configured. Please set PINECONE_API_KEY and PINECONE_ENVIRONMENT.'
    );
  }

  if (!pineconeClient) {
    pineconeClient = new Pinecone({
      apiKey: aiConfig.pineconeApiKey!,
    });
  }

  return pineconeClient;
}

/**
 * Get Pinecone index
 */
export async function getIndex() {
  const client = getPineconeClient();
  return client.index(aiConfig.pineconeIndexName);
}

/**
 * Generate embeddings for text using OpenAI
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const openai = getOpenAIClient();
  
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
  });

  return response.data[0].embedding;
}

/**
 * Upsert documents into vector store
 */
export async function upsertDocuments(documents: AiDocument[]): Promise<void> {
  if (documents.length === 0) {
    return;
  }

  const index = await getIndex();
  
  // Generate embeddings for all documents
  const vectors = await Promise.all(
    documents.map(async (doc) => {
      const text = extractTextForEmbedding(doc);
      const embedding = await generateEmbedding(text);

      return {
        id: doc.id,
        values: embedding,
        metadata: {
          title: doc.title,
          content: doc.content.substring(0, 1000), // Truncate to avoid metadata size limits
          source: doc.source,
          url: doc.url,
          type: doc.type,
          category: doc.metadata?.category || '',
          tags: doc.metadata?.tags?.join(',') || '',
        },
      };
    })
  );

  // Upsert in batches of 100
  const batchSize = 100;
  for (let i = 0; i < vectors.length; i += batchSize) {
    const batch = vectors.slice(i, i + batchSize);
    await index.upsert(batch);
  }
}

/**
 * Query documents from vector store
 */
export async function queryDocuments(
  query: string,
  options: {
    topK?: number;
    filter?: Record<string, string>;
  } = {}
): Promise<AiDocument[]> {
  const { topK = 5, filter } = options;

  const index = await getIndex();
  const embedding = await generateEmbedding(query);

  const queryResponse = await index.query({
    vector: embedding,
    topK,
    includeMetadata: true,
    filter: filter as Record<string, unknown>,
  });

  // Convert query results to AiDocument format
  const documents: AiDocument[] = queryResponse.matches
    .filter((match) => match.metadata)
    .map((match) => ({
      id: match.id,
      title: (match.metadata!.title as string) || '',
      content: (match.metadata!.content as string) || '',
      source: (match.metadata!.source as string) || '',
      url: (match.metadata!.url as string) || '',
      type: ((match.metadata!.type as string) || 'general') as DocumentType,
      metadata: {
        category: match.metadata!.category as string,
        tags: ((match.metadata!.tags as string) || '').split(',').filter(Boolean),
        relevanceScore: match.score,
      },
    }));

  return documents;
}

/**
 * Delete documents from vector store
 */
export async function deleteDocuments(documentIds: string[]): Promise<void> {
  if (documentIds.length === 0) {
    return;
  }

  const index = await getIndex();
  await index.deleteMany(documentIds);
}

/**
 * Check if vector store is available
 */
export function isVectorStoreAvailable(): boolean {
  return isPineconeConfigured();
}

/**
 * Initialize vector store (dev/admin only)
 * This should be called manually or via admin endpoint
 */
export async function ensureInitialIndex(documents: AiDocument[]): Promise<void> {
  if (!isVectorStoreAvailable()) {
    throw new Error('Vector store is not configured');
  }

  console.log(`Upserting ${documents.length} documents to vector store...`);
  await upsertDocuments(documents);
  console.log('Vector store initialized successfully');
}
