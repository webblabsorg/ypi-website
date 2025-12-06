import type { Metadata } from 'next';
import { NewsClient } from './NewsClient';

export const metadata: Metadata = {
  title: 'News & Updates | Yellow Power International',
  description: 'Stay updated with the latest news, project completions, equipment acquisitions, awards, and company updates from Yellow Power International.',
};

export default function NewsPage() {
  return <NewsClient />;
}
