'use client';

import { useState } from 'react';
import { Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MediaGallery } from '@/components/sections/MediaGallery';
import { MEDIA_IMAGE_CATEGORIES, getImagesByCategory } from '@/lib/constants/media';

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredImages = getImagesByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Images className="h-12 w-12 text-gold-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Image Gallery
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore high-resolution photos of our equipment, projects, team, CSR activities, and facilities
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-12">
          <label className="text-sm font-medium text-gray-700 mb-3 block">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {MEDIA_IMAGE_CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-gold-500 hover:bg-gold-600 text-white'
                    : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <strong>{filteredImages.length}</strong>{' '}
            {filteredImages.length === 1 ? 'image' : 'images'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Gallery */}
        <MediaGallery images={filteredImages} columns={4} />

        {/* Back to media kit */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Looking for logos, brand guidelines, or other media resources?
          </p>
          <a
            href="/media"
            className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
          >
            ← Back to Media Kit
          </a>
        </div>
      </div>
    </div>
  );
}
