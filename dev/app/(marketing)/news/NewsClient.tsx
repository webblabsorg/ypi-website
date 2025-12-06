'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { NewsGrid } from '@/components/sections/NewsGrid';
import { NewsFilter } from '@/components/sections/NewsFilter';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { NEWS_ARTICLES } from '@/lib/constants/news';
import { Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ITEMS_PER_PAGE = 6;

export function NewsClient() {
  const [filters, setFilters] = useState({ category: 'All', searchTerm: '' });
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

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

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

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

        {/* Newsletter Signup */}
        <div className="mb-12">
          <NewsletterSignup />
        </div>

        {/* Filter Section */}
        <div className="mb-12 bg-white rounded-lg p-6 shadow-sm">
          <NewsFilter 
            onFilterChange={setFilters} 
            currentCategory={filters.category}
          />
        </div>

        {/* Results count and pagination info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing <strong>{startIndex + 1}-{Math.min(endIndex, filteredArticles.length)}</strong> of{' '}
            <strong>{filteredArticles.length}</strong>{' '}
            {filteredArticles.length === 1 ? 'article' : 'articles'}
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* News Grid */}
        <NewsGrid articles={paginatedArticles} columns={3} showExcerpt={true} />

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className={currentPage === page ? 'bg-gold-500 hover:bg-gold-600' : ''}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="gap-1"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

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
            <Link
              href="/news/press-releases"
              className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
            >
              View Press Releases →
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/media"
              className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
            >
              Media Kit & Resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
