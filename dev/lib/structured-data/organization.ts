import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/seo/config';
import { WithContext, Organization } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  alternateName: 'YPI',
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logo.png`,
  description: SITE_CONFIG.description,
  foundingDate: '2017',
  founder: {
    '@type': 'Person',
    name: 'Emmanuel Kweku Ganu',
    jobTitle: 'Founder & CEO',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.region,
    addressCountry: CONTACT_INFO.address.countryCode,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone,
      contactType: 'customer service',
      areaServed: ['GH', 'BF', 'CI'],
      availableLanguage: ['English', 'French'],
    },
    {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.whatsapp,
      contactType: 'customer service',
      contactOption: 'TollFree',
    },
  ],
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone,
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.twitter,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.youtube,
  ],
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
  knowsAbout: [
    'Mining Services',
    'Drilling Services',
    'Blasting Services',
    'Load and Haul Operations',
    'Construction Services',
    'Mining Equipment',
  ],
};
