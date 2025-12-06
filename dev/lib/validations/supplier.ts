import { z } from 'zod';

export const supplierSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  registrationNumber: z.string().min(2, 'Registration number is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  address: z.string().min(10, 'Full address is required'),
  website: z.string().url().optional().or(z.literal('')),
  productCategories: z.array(z.string()).min(1, 'Select at least one product category'),
  yearsInBusiness: z.string().min(1, 'Years in business is required'),
  capabilities: z.string().min(50, 'Please describe your capabilities in detail'),
  certifications: z.string().optional(),
  references: z.string().optional(),
});

export type SupplierInput = z.infer<typeof supplierSchema>;
