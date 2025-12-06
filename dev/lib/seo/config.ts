import { Metadata } from 'next';

/**
 * SEO Configuration and Constants for Yellow Power International
 */

// Site Configuration
export const SITE_CONFIG = {
  name: 'Yellow Power International',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yellowpowerinternational.com',
  locale: 'en_GH',
  defaultLocale: 'en',
  description: 'Leading provider of drilling, blasting, and mining services across West Africa. Specialized in production drilling, pre-split drilling, load & haul operations, and construction services.',
  keywords: [
    'mining services Ghana',
    'drilling services West Africa',
    'production drilling',
    'pre-split drilling',
    'load and haul operations',
    'mining contractor',
    'blasting services',
    'construction services Ghana',
    'mining equipment',
    'Yellow Power International',
  ],
};

// Contact Information
export const CONTACT_INFO = {
  phone: '+233268066942',
  whatsapp: '+233550099130',
  email: 'info@yellowpowerinternational.com',
  address: {
    street: 'Madina',
    city: 'Accra',
    region: 'Greater Accra',
    country: 'Ghana',
    countryCode: 'GH',
  },
};

// Social Media
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/yellow-power-international',
  twitter: 'https://twitter.com/YellowPowerIntl',
  facebook: 'https://www.facebook.com/YellowPowerInternational',
  youtube: 'https://www.youtube.com/@YellowPowerInternational',
};

// Default SEO Images
export const SEO_IMAGES = {
  default: '/images/og/default.jpg',
  logo: '/images/logo.png',
  width: 1200,
  height: 630,
};

// Default Metadata
export const DEFAULT_METADATA: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SEO_IMAGES.default,
        width: SEO_IMAGES.width,
        height: SEO_IMAGES.height,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: '@YellowPowerIntl',
    images: [SEO_IMAGES.default],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Build metadata for a specific page
 */
export interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMetadata(options: BuildMetadataOptions = {}): Metadata {
  const {
    title,
    description = SITE_CONFIG.description,
    path = '/',
    image = SEO_IMAGES.default,
    type = 'website',
    publishedTime,
    modifiedTime,
    keywords = SITE_CONFIG.keywords,
    noIndex = false,
  } = options;

  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;

  return {
    title: title || SITE_CONFIG.name,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`,
          width: SEO_IMAGES.width,
          height: SEO_IMAGES.height,
          alt: title || SITE_CONFIG.name,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@YellowPowerIntl',
      images: [image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
