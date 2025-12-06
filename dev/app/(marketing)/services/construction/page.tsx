import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants/services";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Construction Services | Yellow Power International",
  description: "Comprehensive construction support for mining infrastructure and civil projects.",
};

export default function ConstructionPage() {
  const service = getServiceBySlug("construction");
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}
