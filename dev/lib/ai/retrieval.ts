/**
 * Retrieval-Augmented Generation (RAG) pipeline
 * Combines vector search with OpenAI for intelligent responses
 */

import { getOpenAIClient, getModelName } from './openai';
import { queryDocuments } from './vector-store';
import type { AiDocument } from './documents';
import { formatDocumentReference } from './documents';

export type Persona = 'client' | 'job_seeker' | 'general';

export interface RetrievalOptions {
  persona?: Persona;
  topK?: number;
  maxTokens?: number;
}

export interface RetrievalResponse {
  answer: string;
  sources: AiDocument[];
  model: string;
}

/**
 * System prompts for different personas
 */
const SYSTEM_PROMPTS: Record<Persona, string> = {
  client: `You are PowerBot, an AI assistant for Yellow Power International (YPI), a leading mining support services company in West Africa.

Your role is to help potential clients understand YPI's services, capabilities, and value proposition.

Key information about YPI:
- Established in 2017 by Mr. Emmanuel Kweku Ganu
- Headquartered in Madina, Greater Accra, Ghana
- 201-500 employees across 3 African countries (Ghana, Burkina Faso, Côte d'Ivoire)
- Core services: Pre-Split Drilling, Production Drilling, Reverse Circulation Drilling, Load & Haul Operations, Construction Services

When responding:
- Be professional and helpful
- Focus on YPI's capabilities, services, and track record
- If asked about specific projects or clients, only mention information from the knowledge base
- If you don't know something specific, suggest contacting YPI directly at +233268066942 or info@yellowpowerinternational.com
- Always base your answers on the provided context
- Do not make up specific facts, numbers, or client names that aren't in the context`,

  job_seeker: `You are PowerBot, an AI assistant for Yellow Power International (YPI), helping job seekers learn about career opportunities.

Your role is to assist people interested in joining YPI's team.

When responding:
- Be encouraging and informative about careers at YPI
- Explain available positions, requirements, and application process
- Highlight YPI's commitment to training, safety, and employee development
- Direct candidates to specific job postings or the careers page
- If asked about specific openings, refer to the knowledge base or suggest checking the careers page
- Always be respectful and professional`,

  general: `You are PowerBot, an AI assistant for Yellow Power International (YPI), a mining support services company.

Your role is to provide helpful information about YPI.

When responding:
- Be friendly, professional, and informative
- Answer questions about YPI's company, services, sustainability, and more
- Always base your answers on the provided context
- If you don't have specific information, suggest relevant pages or contact methods
- Do not make up information that isn't in the knowledge base`,
};

/**
 * Perform RAG query: retrieve relevant documents and generate answer
 */
export async function performRetrieval(
  userQuery: string,
  options: RetrievalOptions = {}
): Promise<RetrievalResponse> {
  const { persona = 'general', topK = 5, maxTokens = 500 } = options;

  // Step 1: Retrieve relevant documents
  const relevantDocs = await queryDocuments(userQuery, { topK });

  if (relevantDocs.length === 0) {
    return {
      answer:
        "I don't have enough information to answer that question. Please visit our website or contact us directly at +233268066942 or info@yellowpowerinternational.com for more details.",
      sources: [],
      model: getModelName(),
    };
  }

  // Step 2: Build context from retrieved documents
  const context = relevantDocs
    .map((doc, idx) => {
      return `[Document ${idx + 1}: ${doc.title}]\n${doc.content}\nSource: ${doc.source}\n`;
    })
    .join('\n---\n\n');

  // Step 3: Generate answer using OpenAI
  const openai = getOpenAIClient();

  const messages = [
    {
      role: 'system' as const,
      content: SYSTEM_PROMPTS[persona],
    },
    {
      role: 'user' as const,
      content: `Context information from Yellow Power International's knowledge base:

${context}

---

User question: ${userQuery}

Please provide a helpful, accurate answer based on the context above. If the context doesn't contain enough information, be honest about it and suggest alternative ways to get the information.`,
    },
  ];

  const completion = await openai.chat.completions.create({
    model: getModelName(),
    messages,
    max_tokens: maxTokens,
    temperature: 0.7,
  });

  const answer = completion.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response.';

  return {
    answer,
    sources: relevantDocs,
    model: getModelName(),
  };
}

/**
 * Format sources for display
 */
export function formatSources(sources: AiDocument[]): string {
  if (sources.length === 0) {
    return '';
  }

  return (
    '\n\nSources:\n' +
    sources
      .slice(0, 3) // Limit to top 3 sources
      .map((doc, idx) => `${idx + 1}. ${formatDocumentReference(doc)}`)
      .join('\n')
  );
}
