"use client";

import Image from "next/image";

export function ProjectMap() {
  // Static image showing Yellow Power International's regional presence
  return (
    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
      <Image
        src="/images/projects/regional-presence-map.png"
        alt="Map showing Yellow Power International's regional presence in Ghana, Mali, and Burkina Faso"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority={false}
      />
    </div>
  );
}
