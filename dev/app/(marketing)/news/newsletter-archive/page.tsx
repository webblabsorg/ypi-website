import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Download, Calendar, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Newsletter Archive | Yellow Power International',
  description: 'Browse past editions of the Yellow Power International newsletter featuring project updates, industry insights, and company news.',
};

// Newsletter archive data
// In production, this would come from a database or CMS
const NEWSLETTERS = [
  {
    id: '2024-12',
    title: 'YPI December 2024 - Year in Review',
    date: '2024-12-01',
    summary: 'A comprehensive look back at 2024: major project completions, new equipment acquisitions, safety achievements, and our vision for 2025.',
    topics: ['Year Review', 'Safety', 'Equipment', 'Projects'],
    url: '/documents/newsletters/ypi-newsletter-2024-12.pdf',
    featured: true,
  },
  {
    id: '2024-11',
    title: 'YPI Q4 2024 Highlights',
    date: '2024-11-30',
    summary: 'Key projects, safety milestones, and fleet expansion updates from the fourth quarter of 2024.',
    topics: ['Q4 Updates', 'Fleet Expansion', 'Safety Records'],
    url: '/documents/newsletters/ypi-newsletter-2024-11.pdf',
    featured: false,
  },
  {
    id: '2024-10',
    title: 'Excellence in Drilling - October 2024',
    date: '2024-10-15',
    summary: 'Spotlight on our production drilling achievements in Ghana and Burkina Faso, plus employee training program updates.',
    topics: ['Production Drilling', 'Training', 'Employee Spotlight'],
    url: '/documents/newsletters/ypi-newsletter-2024-10.pdf',
    featured: false,
  },
  {
    id: '2024-09',
    title: 'Sustainability & Growth - September 2024',
    date: '2024-09-01',
    summary: 'Our commitment to sustainable mining practices, community engagement initiatives, and new partnership announcements.',
    topics: ['Sustainability', 'CSR', 'Partnerships'],
    url: '/documents/newsletters/ypi-newsletter-2024-09.pdf',
    featured: false,
  },
  {
    id: '2024-08',
    title: 'Mid-Year Report - August 2024',
    date: '2024-08-15',
    summary: 'First half of 2024 performance review, financial highlights, and strategic initiatives for H2.',
    topics: ['Financial Report', 'Strategy', 'Performance'],
    url: '/documents/newsletters/ypi-newsletter-2024-08.pdf',
    featured: false,
  },
  {
    id: '2024-07',
    title: 'Innovation in Mining - July 2024',
    date: '2024-07-01',
    summary: 'New technology implementations, equipment upgrades, and digital transformation initiatives.',
    topics: ['Technology', 'Innovation', 'Equipment'],
    url: '/documents/newsletters/ypi-newsletter-2024-07.pdf',
    featured: false,
  },
];

export default function NewsletterArchivePage() {
  const featuredNewsletter = NEWSLETTERS.find((n) => n.featured);
  const regularNewsletters = NEWSLETTERS.filter((n) => !n.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="h-12 w-12 text-gold-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Newsletter Archive
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse past editions of our newsletter featuring project updates, industry insights, 
              safety milestones, and company news from Yellow Power International.
            </p>
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="mb-16">
          <NewsletterSignup />
        </div>

        {/* Featured Newsletter */}
        {featuredNewsletter && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Edition</h2>
            <Card className="bg-gradient-to-br from-gold-50 to-white border-gold-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-gold-500">Latest</Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredNewsletter.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{featuredNewsletter.title}</CardTitle>
                    <CardDescription className="text-base">{featuredNewsletter.summary}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredNewsletter.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="bg-white">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <Button className="bg-gold-500 hover:bg-gold-600" asChild>
                  <a href={featuredNewsletter.url} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Archive Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Editions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNewsletters.map((newsletter) => (
              <Card key={newsletter.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(newsletter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </div>
                  <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                  <CardDescription>{newsletter.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {newsletter.topics.slice(0, 2).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {newsletter.topics.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{newsletter.topics.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={newsletter.url} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Looking for a specific newsletter?
          </h3>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Contact our communications team for access 
            to archived editions or specific content requests.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
            <Button asChild>
              <Link href="/news">
                Browse Latest News
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
