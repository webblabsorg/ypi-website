"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { COMMUNITY_STORIES } from "@/lib/constants/sustainability";

export function CommunityStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const story = COMMUNITY_STORIES[currentIndex];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % COMMUNITY_STORIES.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + COMMUNITY_STORIES.length) % COMMUNITY_STORIES.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Community Stories</h2>
          <p className="text-gray-600">Hear from the people whose lives we&apos;ve touched</p>
        </div>

        <div className="relative">
          {/* Main Story Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Image/Video Section */}
                <div className="relative bg-gray-200 min-h-[400px] flex items-center justify-center">
                  {story.videoUrl ? (
                    <div className="absolute inset-0 bg-navy/80 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-gold hover:bg-gold-600 text-navy rounded-full w-20 h-20"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                      <p className="absolute bottom-4 text-white text-sm">Click to watch video testimonial</p>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-navy-600">
                      <div className="text-center text-white p-8">
                        <Quote className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-semibold">{story.name}</p>
                        <p className="text-sm opacity-80">{story.role}</p>
                        <p className="text-sm opacity-80 mt-1">{story.location}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-gold mb-4" />
                  
                  <blockquote className="text-xl italic text-navy mb-6 leading-relaxed">
                    &quot;{story.quote}&quot;
                  </blockquote>

                  <div className="mb-6">
                    <h3 className="font-bold text-navy text-lg">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                    <p className="text-sm text-gray-500">{story.location}</p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">{story.story}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button
              onClick={prevStory}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-white shadow-lg hover:bg-gray-100 rounded-full w-12 h-12"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextStory}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-white shadow-lg hover:bg-gray-100 rounded-full w-12 h-12"
              aria-label="Next story"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Story Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {COMMUNITY_STORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-gold w-8" : "bg-gray-300"
              }`}
              aria-label={`View story ${i + 1}`}
            />
          ))}
        </div>

        {/* All Stories Grid (Optional - show thumbnails) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-navy mb-6 text-center">All Stories</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {COMMUNITY_STORIES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(i)}
                className={`p-4 rounded-lg text-center transition-all ${
                  i === currentIndex
                    ? "bg-gold text-navy shadow-lg"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <p className="font-semibold text-sm line-clamp-2">{s.name}</p>
                <p className="text-xs opacity-80 mt-1">{s.role}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
