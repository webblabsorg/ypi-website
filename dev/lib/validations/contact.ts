import { z } from 'zod';

export const contactSchema = z.object({
  category: z.string().min(1, 'Please select an inquiry category'),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  message: z.string().min(20, 'Message should be at least 20 characters'),
  
  // Optional fields for specific categories
  company: z.string().optional(),
  serviceType: z.string().optional(),
  projectDetails: z.string().optional(),
  timeline: z.string().optional(),
  partnershipType: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  productCategory: z.string().optional(),
  roleInterest: z.string().optional(),
  experience: z.string().optional(),
  outlet: z.string().optional(),
  inquiryType: z.string().optional(),
  deadline: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
