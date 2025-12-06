/**
 * Environment configuration helper
 * Centralized access to environment variables with type safety
 */

// Email provider configuration
export const emailConfig = {
  provider: process.env.EMAIL_PROVIDER || 'resend', // 'resend' or 'sendgrid'
  resendApiKey: process.env.RESEND_API_KEY,
  sendgridApiKey: process.env.SENDGRID_API_KEY,
  fromEmail: process.env.EMAIL_FROM || 'noreply@yellowpowerinternational.com',
  toEmail: process.env.EMAIL_TO || 'info@yellowpowerinternational.com',
};

// Cloudinary configuration
export const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
};

// Department email routing
export const departmentEmails = {
  sales: process.env.SALES_EMAIL || 'sales@yellowpowerinternational.com',
  hr: process.env.HR_EMAIL || 'hr@yellowpowerinternational.com',
  partnerships: process.env.PARTNERSHIPS_EMAIL || 'partnerships@yellowpowerinternational.com',
  procurement: process.env.PROCUREMENT_EMAIL || 'procurement@yellowpowerinternational.com',
  media: process.env.MEDIA_EMAIL || 'media@yellowpowerinternational.com',
  general: process.env.GENERAL_EMAIL || 'info@yellowpowerinternational.com',
};

/**
 * Check if email service is configured
 */
export function isEmailConfigured(): boolean {
  if (emailConfig.provider === 'resend') {
    return !!emailConfig.resendApiKey;
  }
  if (emailConfig.provider === 'sendgrid') {
    return !!emailConfig.sendgridApiKey;
  }
  return false;
}

/**
 * Check if Cloudinary is configured
 */
export function isCloudinaryConfigured(): boolean {
  return !!(
    cloudinaryConfig.cloudName &&
    cloudinaryConfig.apiKey &&
    cloudinaryConfig.apiSecret
  );
}

/**
 * Get email configuration or throw error
 */
export function getEmailConfig() {
  if (!isEmailConfigured()) {
    throw new Error(
      `Email service not configured. Please set ${
        emailConfig.provider === 'resend' ? 'RESEND_API_KEY' : 'SENDGRID_API_KEY'
      } in environment variables.`
    );
  }
  return emailConfig;
}

/**
 * Get Cloudinary configuration or throw error
 */
export function getCloudinaryConfig() {
  if (!isCloudinaryConfigured()) {
    throw new Error(
      'Cloudinary not configured. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.'
    );
  }
  return cloudinaryConfig;
}

// AI & Vector Store configuration
export const aiConfig = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  openaiModel: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
  pineconeApiKey: process.env.PINECONE_API_KEY,
  pineconeEnvironment: process.env.PINECONE_ENVIRONMENT,
  pineconeIndexName: process.env.PINECONE_INDEX_NAME || 'ypi-knowledge-base',
  enablePowerBot: process.env.NEXT_PUBLIC_ENABLE_POWERBOT === 'true',
  enableAISearch: process.env.NEXT_PUBLIC_ENABLE_AI_SEARCH === 'true',
};

/**
 * Check if OpenAI is configured
 */
export function isOpenAIConfigured(): boolean {
  return !!aiConfig.openaiApiKey;
}

/**
 * Check if Pinecone is configured
 */
export function isPineconeConfigured(): boolean {
  return !!(
    aiConfig.pineconeApiKey &&
    aiConfig.pineconeEnvironment &&
    aiConfig.pineconeIndexName
  );
}

/**
 * Check if AI features are fully enabled
 */
export function isAIFeaturesEnabled(): boolean {
  return isOpenAIConfigured() && isPineconeConfigured();
}

/**
 * Get AI configuration or throw error
 */
export function getAIConfig() {
  if (!isOpenAIConfigured()) {
    throw new Error('OpenAI not configured. Please set OPENAI_API_KEY in environment variables.');
  }
  if (!isPineconeConfigured()) {
    throw new Error(
      'Pinecone not configured. Please set PINECONE_API_KEY, PINECONE_ENVIRONMENT, and PINECONE_INDEX_NAME.'
    );
  }
  return aiConfig;
}
