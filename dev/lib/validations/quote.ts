import { z } from 'zod';

export const quoteSchema = z.object({
  // Contact information
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  company: z.string().min(2, 'Company name is required'),
  
  // Service details
  serviceType: z.string().min(1, 'Please select a service type'),
  projectDetails: z.string().min(30, 'Please provide more details about your project'),
  timeline: z.string().optional(),
  
  // Additional info
  message: z.string().min(20, 'Message should be at least 20 characters'),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
