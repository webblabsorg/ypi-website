import { Resend } from 'resend';
import { emailConfig, isEmailConfigured } from '@/lib/config/env';

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

export interface EmailResult {
  success: boolean;
  error?: string;
  id?: string;
}

let resendClient: Resend | null = null;

/**
 * Initialize Resend client
 */
function getResendClient(): Resend | null {
  if (!isEmailConfigured()) {
    return null;
  }
  
  if (!resendClient && emailConfig.resendApiKey) {
    resendClient = new Resend(emailConfig.resendApiKey);
  }
  
  return resendClient;
}

/**
 * Send an email using configured provider
 */
export async function sendEmail(options: SendEmailOptions): Promise<EmailResult> {
  try {
    // Check if email is configured
    if (!isEmailConfigured()) {
      console.warn('Email service not configured. Email will not be sent.');
      return {
        success: false,
        error: 'Email service not configured',
      };
    }

    // Use Resend
    const client = getResendClient();
    if (!client) {
      return {
        success: false,
        error: 'Failed to initialize email client',
      };
    }

    const emailOptions: {
      from: string;
      to: string | string[];
      subject: string;
      html?: string;
      text?: string;
      replyTo?: string;
    } = {
      from: emailConfig.fromEmail,
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
    };

    if (options.html) {
      emailOptions.html = options.html;
    } else if (options.text) {
      emailOptions.text = options.text;
    }

    if (options.replyTo) {
      emailOptions.replyTo = options.replyTo;
    }

    // @ts-expect-error - Resend types are overly restrictive
    const { data, error } = await client.emails.send(emailOptions);

    if (error) {
      console.error('Email send error:', error);
      return {
        success: false,
        error: error.message || 'Failed to send email',
      };
    }

    return {
      success: true,
      id: data?.id,
    };
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send quote request notification
 */
export async function sendQuoteNotification(data: {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  projectDetails: string;
  timeline?: string;
  message: string;
}): Promise<EmailResult> {
  const html = `
    <h2>New Quote Request</h2>
    <p><strong>From:</strong> ${data.fullName} (${data.company})</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Service Type:</strong> ${data.serviceType}</p>
    ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
    <h3>Project Details:</h3>
    <p>${data.projectDetails}</p>
    <h3>Additional Message:</h3>
    <p>${data.message}</p>
  `;

  return sendEmail({
    to: emailConfig.toEmail,
    subject: `New Quote Request from ${data.fullName} - ${data.company}`,
    html,
    replyTo: data.email,
  });
}

/**
 * Send contact form notification
 */
export async function sendContactNotification(data: {
  category: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string | undefined;
}, toEmail: string): Promise<EmailResult> {
  let additionalFields = '';
  const exclude = ['category', 'fullName', 'email', 'phone', 'message'];
  
  Object.keys(data).forEach((key) => {
    if (!exclude.includes(key) && data[key]) {
      additionalFields += `<p><strong>${key}:</strong> ${data[key]}</p>`;
    }
  });

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Category:</strong> ${data.category}</p>
    <p><strong>From:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    ${additionalFields}
    <h3>Message:</h3>
    <p>${data.message}</p>
  `;

  return sendEmail({
    to: toEmail,
    subject: `New ${data.category} Inquiry from ${data.fullName}`,
    html,
    replyTo: data.email,
  });
}
