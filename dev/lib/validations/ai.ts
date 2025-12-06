/**
 * Validation schemas for AI-related API endpoints
 * Uses Zod for type-safe validation
 */

import { z } from 'zod';

/**
 * Chat message schema
 */
export const chatMessageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string().min(1, 'Message content is required'),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;

/**
 * Chat request schema
 */
export const chatRequestSchema = z.object({
  messages: z
    .array(chatMessageSchema)
    .min(1, 'At least one message is required')
    .max(50, 'Too many messages in conversation'),
  persona: z.enum(['client', 'job_seeker', 'general']).optional().default('general'),
  context: z.string().optional(),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

/**
 * Search request schema
 */
export const searchRequestSchema = z.object({
  query: z
    .string()
    .min(3, 'Search query must be at least 3 characters')
    .max(200, 'Search query is too long'),
  filters: z
    .object({
      type: z.enum(['service', 'project', 'career', 'about', 'sustainability', 'general']).optional(),
      category: z.string().optional(),
    })
    .optional(),
  limit: z.number().int().positive().max(20).optional().default(10),
});

export type SearchRequest = z.infer<typeof searchRequestSchema>;
