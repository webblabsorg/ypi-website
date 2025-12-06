'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { MediaImage } from '@/lib/constants/media';

interface MediaGalleryProps {
  images: MediaImage[];
  columns?: 2 | 3 | 4;
}

export function MediaGallery({ images, columns = 3 }: MediaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<MediaImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  const openLightbox = (image: MediaImage) => {
    const index = images.findIndex((img) => img.id === image.id);
    setLightboxIndex(index);
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = lightboxIndex > 0 ? lightboxIndex - 1 : images.length - 1;
    setLightboxIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = lightboxIndex < images.length - 1 ? lightboxIndex + 1 : 0;
    setLightboxIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No images available.</p>
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4`}>
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => openLightbox(image)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <h4 className="font-semibold text-sm line-clamp-2">{image.title}</h4>
              {image.category && (
                <Badge variant="secondary" className="mt-2 bg-white/20 backdrop-blur-sm">
                  {image.category}
                </Badge>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent 
          className="max-w-7xl h-[90vh] p-0 gap-0"
          onKeyDown={handleKeyDown}
        >
          {selectedImage && (
            <div className="relative w-full h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-black/90 text-white">
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="font-semibold text-lg truncate">{selectedImage.title}</h3>
                  <p className="text-sm text-gray-300">
                    {lightboxIndex + 1} / {images.length}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => window.open(selectedImage.src, '_blank')}
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={closeLightbox}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Footer with caption */}
              {(selectedImage.caption || selectedImage.photographer || selectedImage.date) && (
                <div className="p-4 bg-black/90 text-white">
                  {selectedImage.caption && (
                    <p className="text-sm mb-2">{selectedImage.caption}</p>
                  )}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    {selectedImage.photographer && (
                      <span>Photo by {selectedImage.photographer}</span>
                    )}
                    {selectedImage.date && (
                      <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
