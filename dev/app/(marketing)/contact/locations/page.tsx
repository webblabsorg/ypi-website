import type { Metadata } from 'next';
import { LocationsClient } from './LocationsClient';

export const metadata: Metadata = {
  title: 'Our Locations | Yellow Power International',
  description: 'Find YPI offices across Ghana, Burkina Faso, and Côte d\'Ivoire. Contact information and directions for all our locations.',
};

export default function OfficeLocationsPage() {
  return <LocationsClient />;
}
