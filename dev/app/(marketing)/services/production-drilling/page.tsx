import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants/services";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Production Drilling | Yellow Power International",
  description: "High-capacity drilling operations for mass ore extraction in mining environments.",
};

export default function ProductionDrillingPage() {
  const service = getServiceBySlug("production-drilling");
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}
