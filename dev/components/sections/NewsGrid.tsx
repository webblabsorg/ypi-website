import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { NewsArticle } from '@/lib/constants/news';

interface NewsGridProps {
  articles: NewsArticle[];
  columns?: 2 | 3 | 4;
  showExcerpt?: boolean;
}

export function NewsGrid({ articles, columns = 3, showExcerpt = true }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
      </div>
    );
  }

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {articles.map((article) => (
        <Card key={article.slug} className="group hover:shadow-lg transition-shadow overflow-hidden">
          <CardHeader className="p-0">
            <Link href={`/news/${article.slug}`}>
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-200">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-white/90 backdrop-blur-sm hover:bg-white"
                  >
                    {article.category}
                  </Badge>
                </div>
              </div>
            </Link>
          </CardHeader>

          <CardContent className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>

            <Link href={`/news/${article.slug}`}>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                {article.title}
              </h3>
            </Link>

            {showExcerpt && (
              <p className="text-gray-600 line-clamp-3 mb-4">
                {article.excerpt}
              </p>
            )}

            {article.tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-gray-400" />
                {article.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-0">
            <Button variant="link" className="p-0 h-auto font-semibold text-gold-600 hover:text-gold-700" asChild>
              <Link href={`/news/${article.slug}`}>
                Read Full Article →
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
