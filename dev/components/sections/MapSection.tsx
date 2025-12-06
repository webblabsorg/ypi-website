"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import type mapboxgl from "mapbox-gl";

interface Office {
  name: string;
  city: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
}

interface MapSectionProps {
  offices: Office[];
}

export function MapSection({ offices }: MapSectionProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!token) {
      setMapError("Mapbox token not configured. Please set NEXT_PUBLIC_MAPBOX_TOKEN environment variable.");
      return;
    }

    // Dynamically import mapbox-gl to avoid SSR issues
    import("mapbox-gl").then((mapboxgl) => {
      mapboxgl.default.accessToken = token;

      try {
        map.current = new mapboxgl.default.Map({
          container: mapContainer.current!,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [1.5, 6.0], // Centered on Ghana/West Africa
          zoom: 4,
        });

        // Add navigation controls
        map.current.addControl(new mapboxgl.default.NavigationControl());

        // Add markers for each office
        if (map.current) {
          offices.forEach((office) => {
            // Create custom marker element
            const el = document.createElement("div");
            el.className = "w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-lg cursor-pointer";
            el.innerHTML = `<svg class="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>`;

            // Create popup
            const popup = new mapboxgl.default.Popup({ offset: 25 }).setHTML(
              `<div class="p-2">
                <h3 class="font-semibold text-navy">${office.name}</h3>
                <p class="text-sm text-gray-600">${office.city}, ${office.country}</p>
              </div>`
            );

            // Add marker to map
            new mapboxgl.default.Marker(el)
              .setLngLat(office.coordinates)
              .setPopup(popup)
              .addTo(map.current!);
          });
        }

        map.current.on("load", () => {
          setMapLoaded(true);
        });
      } catch (error) {
        console.error("Error initializing map:", error);
        setMapError("Failed to initialize map. Please check your internet connection.");
      }
    }).catch((error) => {
      console.error("Error loading Mapbox GL:", error);
      setMapError("Failed to load map library.");
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [offices]);

  if (mapError) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center text-center p-8">
        <div>
          <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 max-w-md">{mapError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={mapContainer}
        className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg"
        style={{ minHeight: "500px" }}
      />
      {!mapLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
