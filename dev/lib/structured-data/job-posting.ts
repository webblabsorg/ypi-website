import { SITE_CONFIG } from '@/lib/seo/config';
import { WithContext, JobPosting } from 'schema-dts';

// Placeholder for jobs data - will be replaced when jobs constants are created
const JOBS: Array<{
  id: string;
  title: string;
  description: string;
  postedDate: string;
  deadline?: string;
  type: string;
  location: string;
  salary: number;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  experience: string;
}> = [];

/**
 * Generate JobPosting schemas for all open positions
 */
export function generateJobPostingSchemas(): WithContext<JobPosting>[] {
  return JOBS.map((job) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: SITE_CONFIG.name,
      value: job.id,
    },
    datePosted: job.postedDate,
    validThrough: job.deadline || undefined,
    employmentType: job.type.toUpperCase(),
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      sameAs: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/images/logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'GH',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'GHS',
      value: {
        '@type': 'QuantitativeValue',
        value: job.salary,
        unitText: 'MONTH',
      },
    },
    qualifications: job.requirements.join('. '),
    responsibilities: job.responsibilities.join('. '),
    skills: job.requirements.join(', '),
    jobBenefits: job.benefits.join(', '),
    experienceRequirements: {
      '@type': 'OccupationalExperienceRequirements',
      monthsOfExperience: parseInt(job.experience.split('-')[0]) * 12 || 0,
    },
    url: `${SITE_CONFIG.url}/careers/jobs/${job.id}`,
  }));
}

/**
 * Get JobPosting schema for a specific job
 */
export function getJobPostingSchema(jobId: string): WithContext<JobPosting> | null {
  const job = JOBS.find((j) => j.id === jobId);
  if (!job) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: SITE_CONFIG.name,
      value: job.id,
    },
    datePosted: job.postedDate,
    validThrough: job.deadline || undefined,
    employmentType: job.type.toUpperCase(),
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      sameAs: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/images/logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'GH',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'GHS',
      value: {
        '@type': 'QuantitativeValue',
        value: job.salary,
        unitText: 'MONTH',
      },
    },
    qualifications: job.requirements.join('. '),
    responsibilities: job.responsibilities.join('. '),
    skills: job.requirements.join(', '),
    jobBenefits: job.benefits.join(', '),
    experienceRequirements: {
      '@type': 'OccupationalExperienceRequirements',
      monthsOfExperience: parseInt(job.experience.split('-')[0]) * 12 || 0,
    },
    url: `${SITE_CONFIG.url}/careers/jobs/${job.id}`,
  };
}
