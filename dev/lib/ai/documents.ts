/**
 * AI Knowledge Base Document types and utilities
 * Defines structure for knowledge base documents used by AI
 */

export type DocumentType = 
  | 'service' 
  | 'project' 
  | 'career' 
  | 'about' 
  | 'sustainability' 
  | 'general';

export interface AiDocument {
  id: string;
  title: string;
  content: string;
  source: string;
  url: string;
  type: DocumentType;
  metadata?: {
    category?: string;
    tags?: string[];
    lastUpdated?: string;
    relevanceScore?: number;
  };
}

/**
 * Create an AI document from structured content
 */
export function createAiDocument(params: {
  id: string;
  title: string;
  content: string;
  source: string;
  url: string;
  type: DocumentType;
  category?: string;
  tags?: string[];
}): AiDocument {
  return {
    id: params.id,
    title: params.title,
    content: params.content,
    source: params.source,
    url: params.url,
    type: params.type,
    metadata: {
      category: params.category,
      tags: params.tags,
      lastUpdated: new Date().toISOString(),
    },
  };
}

/**
 * Extract text content from AI document for embedding
 */
export function extractTextForEmbedding(doc: AiDocument): string {
  return `${doc.title}\n\n${doc.content}\n\nSource: ${doc.source}`;
}

/**
 * Format document for display in chat responses
 */
export function formatDocumentReference(doc: AiDocument): string {
  return `[${doc.title}](${doc.url}) - ${doc.source}`;
}
