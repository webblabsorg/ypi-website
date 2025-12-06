import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { OfficeLocation } from '@/lib/constants/offices';

interface OfficeCardProps {
  office: OfficeLocation;
  className?: string;
}

export function OfficeCard({ office, className = '' }: OfficeCardProps) {
  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl mb-2">{office.name}</CardTitle>
            {office.isHeadquarters && (
              <Badge variant="default" className="bg-gold-500 hover:bg-gold-600">
                Headquarters
              </Badge>
            )}
          </div>
          <Building2 className="h-8 w-8 text-gold-500" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900">{office.city}</p>
            <p className="text-sm text-gray-600">{office.address}</p>
            <p className="text-sm text-gray-600">{office.country}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
          <a
            href={`tel:${office.phone.replace(/\s/g, '')}`}
            className="text-gray-900 hover:text-gold-600 transition-colors"
          >
            {office.phone}
          </a>
        </div>

        {/* Email */}
        {office.email && (
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
            <a
              href={`mailto:${office.email}`}
              className="text-gray-900 hover:text-gold-600 transition-colors break-all"
            >
              {office.email}
            </a>
          </div>
        )}

        {/* Operating Hours */}
        {office.operatingHours && (
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600">{office.operatingHours}</p>
          </div>
        )}

        {/* Services */}
        {office.services && office.services.length > 0 && (
          <div className="pt-4 border-t">
            <p className="text-sm font-medium text-gray-700 mb-2">Services Offered:</p>
            <div className="flex flex-wrap gap-2">
              {office.services.map((service) => (
                <Badge key={service} variant="outline" className="text-xs">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
