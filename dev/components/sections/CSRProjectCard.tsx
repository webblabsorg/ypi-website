import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users } from "lucide-react";
import type { CSRProject } from "@/lib/constants/sustainability";

interface CSRProjectCardProps {
  project: CSRProject;
  detailed?: boolean;
}

export function CSRProjectCard({ project, detailed = false }: CSRProjectCardProps) {
  const categoryColors: Record<CSRProject["category"], string> = {
    "Education": "bg-blue-100 text-blue-800",
    "Healthcare": "bg-red-100 text-red-800",
    "Infrastructure": "bg-gray-100 text-gray-800",
    "Community Development": "bg-purple-100 text-purple-800",
    "Environment": "bg-green-100 text-green-800",
  };

  const statusColors: Record<CSRProject["status"], string> = {
    "completed": "bg-green-100 text-green-800 border-green-300",
    "ongoing": "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <Card className="hover:shadow-xl transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={categoryColors[project.category]}>{project.category}</Badge>
          <Badge variant="outline" className={statusColors[project.status]}>
            {project.status === "completed" ? "Completed" : "Ongoing"}
          </Badge>
        </div>
        <CardTitle className="text-2xl line-clamp-2">{project.title}</CardTitle>
        <CardDescription className="flex flex-col gap-1 mt-2">
          <span className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            {project.location}, {project.country}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <Calendar className="h-4 w-4" />
            {project.year}
          </span>
          {project.beneficiaries && (
            <span className="flex items-center gap-1 text-sm">
              <Users className="h-4 w-4" />
              {project.beneficiaries.toLocaleString()}+ beneficiaries
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-700 mb-4 line-clamp-3">{project.impactSummary}</p>

        {detailed && (
          <>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            
            <div className="mt-auto">
              <h4 className="font-semibold text-navy mb-3">Key Impact Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-navy">{metric.value}</div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {!detailed && (
          <div className="mt-auto pt-4">
            <div className="grid grid-cols-2 gap-2">
              {project.metrics.slice(0, 2).map((metric, i) => (
                <div key={i} className="bg-gray-50 p-2 rounded">
                  <div className="text-lg font-bold text-navy">{metric.value}</div>
                  <div className="text-xs text-gray-600 line-clamp-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
