import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants/services";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Pre-Split Drilling | Yellow Power International",
  description: "Precision drilling for controlled blast fragmentation and wall stability in open pit mines.",
};

export default function PreSplitDrillingPage() {
  const service = getServiceBySlug("pre-split-drilling");
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}
