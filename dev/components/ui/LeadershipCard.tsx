import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  email?: string;
  linkedin?: string;
}

export function LeadershipCard({
  name,
  role,
  bio,
  photo,
  email,
  linkedin,
}: LeadershipCardProps) {
  const isSvgPhoto = !!photo && photo.toLowerCase().endsWith(".svg");

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-4">
        {photo ? (
          <div className="relative w-full aspect-square overflow-hidden rounded-lg">
            <Image
              src={photo}
              alt={name}
              fill
              unoptimized={isSvgPhoto}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full aspect-square bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg flex items-center justify-center">
            <div className="text-5xl font-bold text-navy/20">
              {name.charAt(0)}
            </div>
          </div>
        )}
        <div>
          <CardTitle className="text-xl font-semibold text-navy">
            {name}
          </CardTitle>
          <p className="text-sm text-gold font-medium mt-1">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
        {(email || linkedin) && (
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-navy hover:text-gold transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-gold transition-colors"
                aria-label={`LinkedIn profile of ${name}`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
