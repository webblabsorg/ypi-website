'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onOpenChange(false);
      setQuery('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 bg-transparent border-0">
        {/* Top Section with #003087 background */}
        <div style={{ backgroundColor: '#003087' }} className="px-6 py-8 rounded-t-lg relative">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
            aria-label="Close search"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <DialogHeader className="space-y-3 mb-6">
            <DialogTitle className="text-white text-center text-lg">
              Find information about our services, careers, projects, and more
            </DialogTitle>
          </DialogHeader>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search YPI services, careers, sustainability..."
                className="pl-12 pr-24 h-12 bg-white text-navy rounded-md"
                autoFocus
              />
              <Button
                type="submit"
                disabled={!query.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold hover:bg-gold-600 text-navy font-semibold"
              >
                Search
              </Button>
            </div>
          </form>
        </div>

        {/* Bottom Section - Quick Links (Optional) */}
        <div className="bg-white px-6 py-4 rounded-b-lg">
          <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {['Drilling Services', 'Career Opportunities', 'Sustainability', 'Contact Us'].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  router.push(`/search?q=${encodeURIComponent(term)}`);
                  onOpenChange(false);
                }}
                className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-navy rounded-full transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
