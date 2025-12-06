import { SITE_CONFIG } from '@/lib/seo/config';
import { WithContext, BreadcrumbList } from 'schema-dts';

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

// Common breadcrumb paths
export const COMMON_BREADCRUMBS = {
  about: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ],
  services: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ],
  projects: [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ],
  sustainability: [
    { name: 'Home', path: '/' },
    { name: 'Sustainability', path: '/sustainability' },
  ],
  careers: [
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/careers' },
  ],
  news: [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
  ],
  contact: [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ],
};
