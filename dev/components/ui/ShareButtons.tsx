'use client';

import { Facebook, Linkedin, Twitter, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

export function ShareButtons({ url, title, className = '' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-gray-600">Share:</span>
      
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={() => window.open(shareLinks.linkedin, '_blank', 'noopener,noreferrer')}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={() => window.open(shareLinks.twitter, '_blank', 'noopener,noreferrer')}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={() => window.open(shareLinks.facebook, '_blank', 'noopener,noreferrer')}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={copyToClipboard}
        aria-label="Copy link"
      >
        <LinkIcon className="h-4 w-4" />
      </Button>

      {copied && (
        <span className="text-sm text-green-600 font-medium animate-in fade-in duration-200">
          Copied!
        </span>
      )}
    </div>
  );
}
