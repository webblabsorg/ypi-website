import { z } from 'zod';

export const consultationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  company: z.string().min(2, 'Company name is required'),
  consultationTopic: z.string().min(1, 'Please select a consultation topic'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  message: z.string().min(20, 'Please provide more details about your consultation needs'),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
