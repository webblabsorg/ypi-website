import { SITE_CONFIG } from '@/lib/seo/config';
import { SERVICES } from '@/lib/constants/services';
import { WithContext, Service } from 'schema-dts';

/**
 * Generate Service schemas for all services
 */
export function generateServiceSchemas(): WithContext<Service>[] {
  return SERVICES.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    serviceType: service.name,
    areaServed: [
      {
        '@type': 'Country',
        name: 'Ghana',
      },
      {
        '@type': 'Country',
        name: 'Burkina Faso',
      },
      {
        '@type': 'Country',
        name: 'Côte d\'Ivoire',
      },
    ],
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    category: 'Mining Services',
  }));
}

// Core service categories
export const coreServicesSchema: WithContext<Service>[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Production Drilling Services',
    description: 'Specialized production drilling services for mining operations across West Africa',
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    serviceType: 'Production Drilling',
    areaServed: ['GH', 'BF', 'CI'],
    category: 'Mining Services',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pre-Split Drilling Services',
    description: 'Expert pre-split drilling and blasting services for controlled rock fragmentation',
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    serviceType: 'Pre-Split Drilling',
    areaServed: ['GH', 'BF', 'CI'],
    category: 'Mining Services',
  },
];
