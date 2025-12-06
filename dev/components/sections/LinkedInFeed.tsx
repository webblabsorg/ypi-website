'use client';

import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LinkedInFeedProps {
  companyUrl?: string;
  className?: string;
}

/**
 * LinkedIn Feed Placeholder Component
 * 
 * This is a stub component for future LinkedIn company feed integration.
 * For production, you can integrate LinkedIn's official embedded feed
 * or use their API to display company posts.
 */
export function LinkedInFeed({ 
  companyUrl,
  className = '' 
}: LinkedInFeedProps) {
  const linkedInUrl = companyUrl || process.env.NEXT_PUBLIC_LINKEDIN_URL;

  // Hide if no LinkedIn URL configured
  if (!linkedInUrl) {
    return null;
  }

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-8 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center">
            <Linkedin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Follow Us on LinkedIn
            </h3>
            <p className="text-sm text-gray-600">
              Stay connected with our latest updates
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center mb-6">
        <p className="text-gray-600 mb-4">
          Connect with Yellow Power International on LinkedIn to stay updated with our latest projects, 
          industry insights, job opportunities, and company news.
        </p>
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <p>✓ Latest project announcements</p>
          <p>✓ Industry insights and trends</p>
          <p>✓ Career opportunities</p>
          <p>✓ Company milestones</p>
        </div>
      </div>

      <Button
        className="w-full bg-[#0077B5] hover:bg-[#006399] text-white"
        asChild
      >
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <Linkedin className="h-5 w-5" />
          Visit Our LinkedIn Page
          <ExternalLink className="h-4 w-4" />
        </a>
      </Button>

      {/* Optional: For future LinkedIn embed integration
      <div className="mt-6 border-t pt-6">
        <p className="text-xs text-gray-500 text-center mb-4">
          Recent Posts from LinkedIn
        </p>
        <div className="space-y-4">
          {/* LinkedIn embedded feed would go here 
          {/* You can use LinkedIn's official embed code or their API 
          {/* Example: <iframe src="..." /> 
        </div>
      </div>
      */}
    </div>
  );
}
