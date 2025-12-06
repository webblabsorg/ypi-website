/**
 * OpenAI client configuration and utilities
 * Provides configured OpenAI client for AI features
 */

import OpenAI from 'openai';
import { aiConfig, isOpenAIConfigured } from '@/lib/config/env';

let openaiClient: OpenAI | null = null;

/**
 * Get configured OpenAI client (singleton)
 */
export function getOpenAIClient(): OpenAI {
  if (!isOpenAIConfigured()) {
    throw new Error(
      'OpenAI is not configured. Please set OPENAI_API_KEY in environment variables.'
    );
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: aiConfig.openaiApiKey,
    });
  }

  return openaiClient;
}

/**
 * Get configured model name
 */
export function getModelName(): string {
  return aiConfig.openaiModel;
}

/**
 * Check if OpenAI is available
 */
export function isOpenAIAvailable(): boolean {
  return isOpenAIConfigured();
}
