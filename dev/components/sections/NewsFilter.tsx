'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { NEWS_CATEGORIES } from '@/lib/constants/news';

interface NewsFilterProps {
  onFilterChange: (filters: { category: string; searchTerm: string }) => void;
  currentCategory?: string;
}

export function NewsFilter({ onFilterChange, currentCategory = 'All' }: NewsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({ category, searchTerm });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onFilterChange({ category: selectedCategory, searchTerm: value });
  };

  return (
    <div className="space-y-6">
      {/* Category filters */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-3 block">
          Filter by Category
        </label>
        <div className="flex flex-wrap gap-2">
          {NEWS_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(category)}
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

      {/* Search */}
      <div>
        <label htmlFor="news-search" className="text-sm font-medium text-gray-700 mb-3 block">
          Search Articles
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="news-search"
            type="text"
            placeholder="Search by title, excerpt, or tags..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Results count */}
      {(selectedCategory !== 'All' || searchTerm) && (
        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>
            {selectedCategory !== 'All' && (
              <span>Category: <strong>{selectedCategory}</strong></span>
            )}
            {selectedCategory !== 'All' && searchTerm && ' · '}
            {searchTerm && (
              <span>Search: <strong>&quot;{searchTerm}&quot;</strong></span>
            )}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedCategory('All');
              setSearchTerm('');
              onFilterChange({ category: 'All', searchTerm: '' });
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
