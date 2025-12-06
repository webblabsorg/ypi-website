import type { Metadata } from 'next';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = {
  title: 'Image Gallery | Yellow Power International',
  description: 'Browse high-resolution images of YPI equipment, projects, team members, CSR activities, and facilities.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
