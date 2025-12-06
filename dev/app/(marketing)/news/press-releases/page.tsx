import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRESS_RELEASES } from '@/lib/constants/news';

export const metadata: Metadata = {
  title: 'Press Releases | Yellow Power International',
  description: 'Access official press releases, financial announcements, and corporate communications from Yellow Power International.',
};

export default function PressReleasesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-12 w-12 text-gold-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Press Releases
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Official press releases and corporate announcements from Yellow Power International
          </p>
        </div>

        {/* Press releases list */}
        <div className="space-y-6">
          {PRESS_RELEASES.map((release) => (
            <Card key={release.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={release.publishedAt}>
                        {new Date(release.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <CardTitle className="text-2xl mb-3">{release.title}</CardTitle>
                    <p className="text-gray-600">{release.summary}</p>
                  </div>
                  {release.pdfUrl && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="flex-shrink-0"
                      asChild
                    >
                      <a
                        href={release.pdfUrl}
                        download
                        aria-label="Download PDF"
                        title="Download PDF"
                      >
                        <Download className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  {release.pdfUrl && (
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href={release.pdfUrl} target="_blank" rel="noopener noreferrer">
                        View Full Release →
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Media Kit CTA */}
        <div className="mt-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Media Resources?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Access our complete media kit including logos, brand guidelines, 
            executive photos, and company fact sheets.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-navy-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/media">
                View Media Kit
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact?category=media">
                Media Inquiries
              </Link>
            </Button>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Looking for news articles or project updates?
          </p>
          <Link
            href="/news"
            className="text-gold-600 hover:text-gold-700 font-semibold hover:underline"
          >
            ← Back to News & Updates
          </Link>
        </div>
      </div>
    </div>
  );
}
