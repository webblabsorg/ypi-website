'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';
import type { MediaVideo } from '@/lib/constants/media';

interface VideoPlayerProps {
  video: MediaVideo;
  autoplay?: boolean;
}

export function VideoPlayer({ video, autoplay = false }: VideoPlayerProps) {
  const videoSrc = autoplay ? `${video.videoUrl}?autoplay=1` : video.videoUrl;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video bg-black">
          <iframe
            src={videoSrc}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary">{video.category}</Badge>
          {video.duration && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{video.duration}</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-3">{video.title}</h3>
        <p className="text-gray-600 mb-4">{video.description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <time dateTime={video.publishedAt}>
            {new Date(video.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </CardContent>
    </Card>
  );
}

interface VideoGridProps {
  videos: MediaVideo[];
  columns?: 2 | 3;
}

export function VideoGrid({ videos, columns = 3 }: VideoGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  };

  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No videos available.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {videos.map((video) => (
        <VideoPlayer key={video.id} video={video} />
      ))}
    </div>
  );
}
