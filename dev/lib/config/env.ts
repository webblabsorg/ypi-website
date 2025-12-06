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
