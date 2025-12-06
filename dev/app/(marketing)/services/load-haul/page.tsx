import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/constants/services";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Load & Haul Operations | Yellow Power International",
  description: "Efficient material transport with modern fleet of loaders and haul trucks.",
};

export default function LoadHaulPage() {
  const service = getServiceBySlug("load-haul");
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}
