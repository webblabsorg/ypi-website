'use client';

import { useState } from 'react';
import { Video as VideoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VideoGrid } from '@/components/sections/VideoPlayer';
import { MEDIA_VIDEO_CATEGORIES, getVideosByCategory } from '@/lib/constants/media';

export function VideosClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredVideos = getVideosByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <VideoIcon className="h-12 w-12 text-gold-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Video Library
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our collection of company videos, equipment demonstrations, 
            project showcases, and more
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-12">
          <label className="text-sm font-medium text-gray-700 mb-3 block">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {MEDIA_VIDEO_CATEGORIES.map((category) => (
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
            Showing <strong>{filteredVideos.length}</strong>{' '}
            {filteredVideos.length === 1 ? 'video' : 'videos'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Video Grid */}
        <VideoGrid videos={filteredVideos} columns={3} />

        {/* Subscribe CTA */}
        <div className="mt-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our YouTube Channel
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gold-50">
            Stay updated with our latest videos, equipment demonstrations, 
            and project highlights by subscribing to our channel.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-gold-600 hover:bg-gray-100"
            asChild
          >
            <a 
              href="https://youtube.com/@yellowpowerintl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Subscribe on YouTube
            </a>
          </Button>
        </div>

        {/* Back to media kit */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Looking for photos or other media resources?
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/media/gallery"
              className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
            >
              Image Gallery →
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/media"
              className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
            >
              Media Kit →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
