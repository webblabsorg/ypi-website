import { v2 as cloudinary } from 'cloudinary';
import { cloudinaryConfig, isCloudinaryConfigured } from '@/lib/config/env';

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
  publicId?: string;
}

let isConfigured = false;

/**
 * Configure Cloudinary
 */
function configureCloudinary() {
  if (isConfigured || !isCloudinaryConfigured()) {
    return;
  }

  cloudinary.config({
    cloud_name: cloudinaryConfig.cloudName,
    api_key: cloudinaryConfig.apiKey,
    api_secret: cloudinaryConfig.apiSecret,
  });

  isConfigured = true;
}

/**
 * Upload CV file to Cloudinary
 * @param fileData Base64 encoded file data or buffer
 * @param fileName Original file name
 */
export async function uploadCvFile(
  fileData: string,
  fileName: string
): Promise<UploadResult> {
  try {
    if (!isCloudinaryConfigured()) {
      console.warn('Cloudinary not configured. File upload skipped.');
      return {
        success: false,
        error: 'File upload service not configured',
      };
    }

    configureCloudinary();

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(fileData, {
      folder: 'ypi-cv-uploads',
      resource_type: 'auto',
      public_id: `cv_${Date.now()}_${fileName.replace(/\.[^/.]+$/, '')}`,
      allowed_formats: ['pdf', 'doc', 'docx'],
    });

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

/**
 * Validate file type and size
 */
export function validateFile(file: {
  type: string;
  size: number;
}): { valid: boolean; error?: string } {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Invalid file type. Please upload PDF, DOC, or DOCX file.',
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File size exceeds 5MB limit.',
    };
  }

  return { valid: true };
}
