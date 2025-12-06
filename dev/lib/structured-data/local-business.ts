import { SITE_CONFIG, CONTACT_INFO } from '@/lib/seo/config';
import { OFFICE_LOCATIONS } from '@/lib/constants/offices';
import { WithContext, LocalBusiness } from 'schema-dts';

/**
 * Generate LocalBusiness schema for office locations
 */
export function generateLocalBusinessSchemas(): WithContext<LocalBusiness>[] {
  return OFFICE_LOCATIONS.map((office) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: office.name,
    description: `${SITE_CONFIG.name} office in ${office.city}, ${office.country}`,
    url: `${SITE_CONFIG.url}/contact/locations#${office.id}`,
    telephone: office.phone,
    email: office.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.address,
      addressLocality: office.city,
      addressCountry: office.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: office.coordinates.lat,
      longitude: office.coordinates.lng,
    },
    ...(office.isHeadquarters && {
      parentOrganization: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    }),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  }));
}

// Headquarters schema
export const headquartersSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: `${SITE_CONFIG.name} Headquarters`,
  description: 'Headquarters of Yellow Power International, leading mining services provider in West Africa',
  url: SITE_CONFIG.url,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.region,
    addressCountry: CONTACT_INFO.address.countryCode,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
};
