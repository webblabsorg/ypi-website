import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { Leaf, Droplet, Wind, Zap, Recycle, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "Environmental Responsibility | Yellow Power International",
  description: "Our commitment to eco-friendly practices, emissions reduction, fuel efficiency, and environmental protection in mining operations.",
};

export default function EnvironmentPage() {
  const initiatives = [
    {
      title: "Eco-Friendly Equipment",
      description: "Modern fleet with advanced emissions control and fuel-efficient engines",
      icon: <Zap className="h-8 w-8" />,
      details: [
        "Tier 3 and Tier 4 compliant engines",
        "Hybrid and electric equipment where feasible",
        "Regular maintenance to optimize efficiency",
        "Retrofit older equipment with cleaner technology",
      ],
    },
    {
      title: "Emissions Reduction",
      description: "Systematic approach to reducing CO2 and other greenhouse gas emissions",
      icon: <Wind className="h-8 w-8" />,
      details: [
        "18% reduction in CO2 emissions (2024)",
        "Real-time emissions monitoring systems",
        "Route optimization to reduce fuel consumption",
        "Idle time reduction protocols",
      ],
    },
    {
      title: "Dust & Noise Management",
      description: "Advanced suppression systems to minimize operational impact",
      icon: <Leaf className="h-8 w-8" />,
      details: [
        "Water spray systems on all drill rigs",
        "Enclosed cabs with HEPA filtration",
        "Noise barriers and silencers",
        "95% dust suppression coverage",
      ],
    },
    {
      title: "Fuel Efficiency Programs",
      description: "Comprehensive fuel management and conservation initiatives",
      icon: <Droplet className="h-8 w-8" />,
      details: [
        "12% improvement in fuel efficiency (2024)",
        "Operator training on fuel-efficient practices",
        "Equipment telematics for consumption monitoring",
        "Alternative fuel exploration",
      ],
    },
    {
      title: "Water Conservation",
      description: "Responsible water use and recycling in operations",
      icon: <Droplet className="h-8 w-8" />,
      details: [
        "22% reduction in water usage",
        "Recycling of drilling fluids",
        "Rainwater harvesting at facilities",
        "Water quality monitoring",
      ],
    },
    {
      title: "Waste Management & Recycling",
      description: "Minimizing waste and maximizing material recovery",
      icon: <Recycle className="h-8 w-8" />,
      details: [
        "76% waste recycling rate",
        "Proper hazardous waste disposal",
        "Parts and component refurbishment",
        "Oil and lubricant recycling program",
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 via-teal-600 to-emerald-600 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <TreePine className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Environmental Responsibility</h1>
            <p className="text-xl text-green-100">
              Protecting our planet through sustainable mining practices and continuous environmental improvement
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Metrics */}
      <ImpactMetrics focus="environmental" showCharts={true} />

      {/* Initiatives */}
      <section className="py-16">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Environmental Initiatives</h2>
            <p className="text-gray-600">
              Comprehensive programs to minimize environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative) => (
              <Card key={initiative.title} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
                    {initiative.icon}
                  </div>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  <p className="text-sm text-gray-600">{initiative.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {initiative.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Policy */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Environmental Policy Statement</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Yellow Power International is committed to minimizing the environmental impact of our operations while contributing to sustainable development in the communities we serve. We recognize that environmental stewardship is essential to our long-term success and social license to operate.
                </p>

                <h3 className="text-xl font-bold text-navy mb-3">Our Commitments:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Compliance:</strong> Meet or exceed all environmental regulations and industry standards in our operating jurisdictions.</li>
                  <li><strong>Prevention:</strong> Prevent pollution through source reduction, waste minimization, and continuous improvement of our environmental management systems.</li>
                  <li><strong>Efficiency:</strong> Optimize resource use, focusing on energy and water conservation, and reducing greenhouse gas emissions.</li>
                  <li><strong>Technology:</strong> Invest in environmentally friendly equipment and technologies that reduce our environmental footprint.</li>
                  <li><strong>Monitoring:</strong> Regularly monitor and report on environmental performance, setting measurable targets for improvement.</li>
                  <li><strong>Training:</strong> Ensure all employees understand their environmental responsibilities and are equipped to fulfill them.</li>
                  <li><strong>Restoration:</strong> Commit to land rehabilitation and biodiversity conservation in areas affected by our operations.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Learn More About Our Sustainability Efforts
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-600 text-navy" asChild>
              <Link href="/sustainability">View All Sustainability Initiatives</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sustainability/safety">Safety Excellence</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
