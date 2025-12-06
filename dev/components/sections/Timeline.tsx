"use client";

import { Calendar } from "lucide-react";

interface TimelineItem {
  year: number | string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
              <div className={`inline-block ${index % 2 === 0 ? "md:float-right" : "md:float-left"}`}>
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow max-w-md">
                  <div className="flex items-center gap-2 mb-2 text-gold font-semibold">
                    <Calendar className="h-4 w-4" />
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>

            {/* Center marker */}
            <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 -ml-2 bg-gold rounded-full border-4 border-white shadow-lg" />

            {/* Spacer for opposite side */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
