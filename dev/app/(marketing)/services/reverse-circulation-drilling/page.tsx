import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants/services";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Reverse Circulation Drilling | Yellow Power International",
  description: "Advanced RC drilling for mineral exploration and grade control sampling.",
};

export default function ReverseCirculationDrillingPage() {
  const service = getServiceBySlug("reverse-circulation-drilling");
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}
