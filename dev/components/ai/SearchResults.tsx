'use client';

/**
 * Search Results Component
 * Displays AI-powered search results with relevance scores
 */

import Link from 'next/link';
import { ExternalLink, FileText, Briefcase, Building2, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SearchResult {
  id: string;
  title: string;
  snippet: string;
  url: string;
  source: string;
  type: string;
  score: number;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading?: boolean;
}

const TYPE_ICONS: Record<string, React.ReactNode> = {
  service: <Briefcase className="h-5 w-5" />,
  career: <Building2 className="h-5 w-5" />,
  about: <FileText className="h-5 w-5" />,
  sustainability: <Leaf className="h-5 w-5" />,
  general: <FileText className="h-5 w-5" />,
};

const TYPE_COLORS: Record<string, string> = {
  service: 'bg-blue-100 text-blue-800',
  career: 'bg-green-100 text-green-800',
  about: 'bg-purple-100 text-purple-800',
  sustainability: 'bg-teal-100 text-teal-800',
  general: 'bg-gray-100 text-gray-800',
};

export function SearchResults({ results, query, isLoading = false }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-100 rounded w-full mt-2" />
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-gray-100 rounded w-full" />
              <div className="h-4 bg-gray-100 rounded w-5/6 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <CardTitle className="text-xl mb-2">No results found</CardTitle>
          <CardDescription>
            Try different keywords or browse our{' '}
            <Link href="/services" className="text-gold-600 hover:underline">
              services
            </Link>
            ,{' '}
            <Link href="/careers" className="text-gold-600 hover:underline">
              careers
            </Link>
            , or{' '}
            <Link href="/about" className="text-gold-600 hover:underline">
              about us
            </Link>{' '}
            pages.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Found <span className="font-semibold">{results.length}</span> result{results.length !== 1 ? 's' : ''} for &ldquo;
        <span className="font-semibold">{query}</span>&rdquo;
      </p>

      {results.map((result) => (
        <Link key={result.id} href={result.url}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-gray-400 group-hover:text-gold-600 transition-colors">
                      {TYPE_ICONS[result.type] || TYPE_ICONS.general}
                    </div>
                    <Badge className={TYPE_COLORS[result.type] || TYPE_COLORS.general}>
                      {result.type}
                    </Badge>
                    {result.score > 0.8 && (
                      <Badge variant="outline" className="bg-gold/10 text-gold-700 border-gold-300">
                        Highly Relevant
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-gold-600 transition-colors">
                    {result.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500 mt-1">
                    {result.source}
                  </CardDescription>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-gold-600 flex-shrink-0" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{result.snippet}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <span className="font-medium">Relevance:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                  <div
                    className="bg-gold-500 h-2 rounded-full"
                    style={{ width: `${Math.round(result.score * 100)}%` }}
                  />
                </div>
                <span>{Math.round(result.score * 100)}%</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
