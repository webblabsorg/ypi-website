import { z } from 'zod';

export const partnershipSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  website: z.string().url('Valid website URL is required').or(z.literal('')),
  partnershipType: z.string().min(1, 'Please select a partnership type'),
  industry: z.string().min(2, 'Industry is required'),
  proposalSummary: z.string().min(50, 'Please provide a detailed proposal summary (minimum 50 characters)'),
  expectedOutcomes: z.string().min(30, 'Please describe expected outcomes'),
  timeline: z.string().optional(),
});

export type PartnershipInput = z.infer<typeof partnershipSchema>;
