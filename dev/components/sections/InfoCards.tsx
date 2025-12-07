"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InfoCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

const cards: InfoCard[] = [
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    title: "Making a positive impact",
    description: "We are committed to finding new ways of operating more sustainably while delivering world-class drilling and mining support services that are essential for West Africa's mining future.",
    link: "/sustainability"
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    title: "Excellence since 2017",
    description: "Since our founding in 2017, we&apos;ve been at the forefront of Ghana&apos;s mining industry, delivering exceptional drilling services and continuously raising standards of operational excellence.",
    link: "/about"
  },
  {
    image: "https://images.unsplash.com/photo-1590496792942-84da40a8f6e7?q=80&w=800&auto=format&fit=crop",
    title: "Delivering for our clients",
    description: "Our teams consistently deliver outstanding results for mining operations across West Africa. Learn more about our commitment to safety, quality, and client satisfaction.",
    link: "/projects"
  }
];

export function InfoCards() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Arrow Only */}
                <div className="text-gold-600 group-hover:text-gold-700">
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
