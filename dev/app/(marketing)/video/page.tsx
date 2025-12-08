import type { Metadata } from "next";
import { VideoPageClient } from "./VideoPageClient";

export const metadata: Metadata = {
  title: "Video Gallery | Yellow Power International",
  description:
    "Watch Yellow Power International videos showcasing our operations, equipment fleet, project highlights, employee stories, and CSR initiatives across West Africa.",
};

export default function VideoPage() {
  return <VideoPageClient />;
}
