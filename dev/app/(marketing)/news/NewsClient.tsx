'use client';

import { useState, useMemo } from 'react';
import { NewsGrid } from '@/components/sections/NewsGrid';
import { NewsFilter } from '@/components/sections/NewsFilter';
import { NEWS_ARTICLES } from '@/lib/constants/news';
import { Newspaper } from 'lucide-react';

export function NewsClient() {
  const [filters, setFilters] = useState({ category: 'All', searchTerm: '' });

  // Filter articles based on category and search term
  const filteredArticles = useMemo(() => {
    let filtered = NEWS_ARTICLES;

    // Filter by category
    if (filters.category !== 'All') {
      filtered = filtered.filter((article) => article.category === filters.category);
    }

    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.excerpt.toLowerCase().includes(searchLower) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="h-12 w-12 text-gold-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              News & Updates
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest news, project achievements, equipment acquisitions, 
            industry recognition, and company developments from Yellow Power International.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 bg-white rounded-lg p-6 shadow-sm">
          <NewsFilter 
            onFilterChange={setFilters} 
            currentCategory={filters.category}
          />
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <strong>{filteredArticles.length}</strong>{' '}
            {filteredArticles.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        {/* News Grid */}
        <NewsGrid articles={filteredArticles} columns={3} showExcerpt={true} />

        {/* No results message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              No articles found matching your search criteria.
            </p>
            <p className="text-gray-400">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}

        {/* Additional links */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Looking for press releases or media resources?
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/news/press-releases"
              className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
            >
              View Press Releases →
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/media"
              className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
            >
              Media Kit & Resources →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
