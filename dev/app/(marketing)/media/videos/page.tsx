import type { Metadata } from 'next';
import { VideosClient } from './VideosClient';

export const metadata: Metadata = {
  title: 'Video Library | Yellow Power International',
  description: 'Watch videos showcasing YPI operations, equipment demonstrations, project highlights, employee stories, and CSR activities.',
};

export default function VideosPage() {
  return <VideosClient />;
}
