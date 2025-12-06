import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AwardCardProps {
  title: string;
  organization: string;
  year: number | string;
  description?: string;
  icon?: React.ReactNode;
}

export function AwardCard({
  title,
  organization,
  year,
  description,
  icon,
}: AwardCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
              {title}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">{organization}</p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
              {icon || <Award className="h-6 w-6" />}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-navy bg-gold/20 px-3 py-1 rounded-full">
            {year}
          </span>
        </div>
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
