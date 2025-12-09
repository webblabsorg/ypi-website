import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants/projects";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Our Clients & Testimonials | Yellow Power International",
  description: "Trusted by leading mining companies across West Africa. See what our clients say about our services.",
};

const CLIENT_LOGOS: string[] = [
  "/images/clients/Blue_AMC_Logo.jpg",
  "/images/clients/Color-logo-with-background-1024x368.jpg",
  "/images/clients/FB_IMG_1608796302465.jpg",
  "/images/clients/Oando-Plc-1024x405.jpg",
  "/images/clients/WAMPEX-New-Logo-No-byline-1-scaled.jpg",
  "/images/clients/african_mining_services_ams_logo.jpeg",
  "/images/clients/african_underground_mining_services_logo.jpeg",
  "/images/clients/ams.jpg",
  "/images/clients/ang.jpg",
  "/images/clients/correct.jpg",
  "/images/clients/df.jpg",
  "/images/clients/fds.jpg",
  "/images/clients/go.jpeg",
  "/images/clients/images.jpeg",
  "/images/clients/kumba-iron-ore-anglo-american-thabazimbi-mine_33698.jpg",
  "/images/clients/pres.jpg",
  "/images/clients/rabotec_ghana_limited_logo.jpeg",
  "/images/clients/sg.jpg",
  "/images/clients/srg.jpg",
  "/images/clients/st.jpg",
  "/images/clients/van.jpeg",
  "/images/clients/wa.jpg",
  "/images/clients/wasia.jpg",
  "/images/clients/wes.jpeg",
  "/images/clients/west_end_mining_company_limited_logo.jpeg",
  "/images/clients/xsfg.jpg",
];

export default function ClientsPage() {
  return (
    <main>
      <section className="text-white py-20" style={{ backgroundColor: '#003087' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-300">
              Trusted by leading mining companies across West Africa for over 8 years
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Client Portfolio</h2>
            <p className="text-gray-600">Working with the best in the mining industry</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {CLIENT_LOGOS.map((src) => (
              <div
                key={src}
                className="relative w-full h-16 md:h-20 flex items-center justify-center bg-white rounded-lg shadow-sm"
              >
                <Image
                  src={src}
                  alt="Client logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Client Testimonials</h2>
            <p className="text-gray-600">Hear from our satisfied clients</p>
          </div>
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      <section className="py-16 text-white" style={{ backgroundColor: '#003087' }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Client</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing list of satisfied clients who trust Yellow Power for their mining operations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-600 text-navy" asChild>
              <Link href="/services#quote-form">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-navy border-white hover:bg-white hover:text-navy"
              asChild
            >
              <Link href="/partnerships">Explore Partnerships</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
