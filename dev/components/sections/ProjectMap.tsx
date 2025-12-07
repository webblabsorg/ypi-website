"use client";

import { MapPin } from "lucide-react";

export function ProjectMap() {
  // Static, fully local map-style card highlighting Ghana, Mali, and Burkina Faso
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Ghana */}
      <div className="absolute left-[18%] bottom-[20%] flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-white shadow-md">
          <MapPin className="h-4 w-4" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-white">Ghana</span>
      </div>

      {/* Mali */}
      <div className="absolute left-1/2 top-[22%] flex -translate-x-1/2 items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-white shadow-md">
          <MapPin className="h-4 w-4" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-white">Mali</span>
      </div>

      {/* Burkina Faso */}
      <div className="absolute right-[18%] bottom-[28%] flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-white shadow-md">
          <MapPin className="h-4 w-4" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-white">Burkina Faso</span>
      </div>
    </div>
  );
}
