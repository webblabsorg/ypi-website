'use client';

/**
 * Related Content Component
 * Displays AI-powered content recommendations
 */

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface RelatedItem {
  id: string;
  title: string;
  snippet: string;
  url: string;
  type: string;
}

interface RelatedContentProps {
  currentPage: string;
  currentType: string;
  limit?: number;
}

export function RelatedContent({ currentPage, currentType, limit = 3 }: RelatedContentProps) {
  const [recommendations, setRecommendations] = useState<RelatedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const response = await fetch('/api/ai/recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            currentPage,
            currentType,
            limit,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setRecommendations(data.recommendations);
        } else {
          setError(data.error || 'Failed to load recommendations');
        }
      } catch {
        setError('Unable to load recommendations');
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendations();
  }, [currentPage, currentType, limit]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-500" />
            <CardTitle>You might also like</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-100 rounded w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || recommendations.length === 0) {
    return null; // Don't show anything if there's an error or no recommendations
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-gold-500" />
          <CardTitle>You might also like</CardTitle>
        </div>
        <CardDescription>AI-powered recommendations based on this content</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((item) => (
            <Link key={item.id} href={item.url}>
              <div className="group p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gold-200">
                <h4 className="font-semibold text-navy group-hover:text-gold-600 transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.snippet}</p>
                <div className="flex items-center gap-1 text-sm text-gold-600 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
