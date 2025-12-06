'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { OfficeLocation } from '@/lib/constants/offices';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface OfficeMapProps {
  offices: OfficeLocation[];
  className?: string;
  height?: string;
}

export function OfficeMap({ offices, className = '', height = '500px' }: OfficeMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Fix Leaflet default marker icons in Next.js
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        const DefaultIcon = L.default.Icon.Default;
        // @ts-expect-error - Leaflet types issue
        delete DefaultIcon.prototype._getIconUrl;
        DefaultIcon.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });
      }).catch((error) => {
        console.error('Error loading Leaflet:', error);
        setMapError(true);
      });
    }
  }, []);

  if (!isClient) {
    return (
      <div className={`bg-gray-200 rounded-xl flex items-center justify-center ${className}`} style={{ height }}>
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  if (mapError) {
    return (
      <div className={`bg-gray-100 rounded-xl border-2 border-gray-300 flex items-center justify-center p-8 ${className}`} style={{ height }}>
        <div className="text-center">
          <p className="text-gray-600 mb-2">Map unavailable</p>
          <p className="text-sm text-gray-500">Please see office details below</p>
        </div>
      </div>
    );
  }

  try {
    // Calculate center point (average of all coordinates)
    const centerLat = offices.reduce((sum, office) => sum + office.coordinates.lat, 0) / offices.length;
    const centerLng = offices.reduce((sum, office) => sum + office.coordinates.lng, 0) / offices.length;

    return (
      <div className={className} style={{ height, position: 'relative', zIndex: 0 }}>
        <MapContainer
          center={[centerLat, centerLng]}
          zoom={5}
          style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {offices.map((office) => (
            <Marker
              key={office.id}
              position={[office.coordinates.lat, office.coordinates.lng]}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-bold text-navy-600 mb-1">{office.name}</p>
                  <p className="text-gray-600">{office.city}</p>
                  <p className="text-gray-600">{office.country}</p>
                  {office.isHeadquarters && (
                    <p className="text-gold-600 font-semibold mt-1 text-xs">Headquarters</p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  } catch (error) {
    console.error('Error loading map:', error);
    setMapError(true);
    return (
      <div className={`bg-gray-100 rounded-xl border-2 border-gray-300 flex items-center justify-center p-8 ${className}`} style={{ height }}>
        <div className="text-center">
          <p className="text-gray-600 mb-2">Map unavailable</p>
          <p className="text-sm text-gray-500">Please see office details below</p>
        </div>
      </div>
    );
  }
}
