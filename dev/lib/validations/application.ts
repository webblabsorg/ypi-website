import { z } from 'zod';

export const applicationSchema = z.object({
  // Personal information
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  address: z.string().min(10, 'Address is required'),
  
  // Job information
  jobId: z.string().min(1, 'Job ID is required'),
  positionApplying: z.string().min(2, 'Position is required'),
  
  // Experience
  yearsOfExperience: z.string().min(1, 'Years of experience is required'),
  currentEmployer: z.string().optional(),
  education: z.string().min(2, 'Education information is required'),
  
  // Documents
  cvFileName: z.string().optional(),
  cvFileSize: z.number().optional(),
  cvFileType: z.string().optional(),
  cvUrl: z.string().url().optional(),
  
  // Additional
  coverLetter: z.string().min(50, 'Cover letter should be at least 50 characters'),
  startDate: z.string().optional(),
  expectedSalary: z.string().optional(),
  references: z.string().optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
