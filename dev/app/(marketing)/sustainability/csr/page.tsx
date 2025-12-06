import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CSRProjectCard } from "@/components/sections/CSRProjectCard";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { CommunityStories } from "@/components/sections/CommunityStories";
import { CSR_PROJECTS } from "@/lib/constants/sustainability";
import { GraduationCap, Heart, Building2, Sprout, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "CSR Programs | Yellow Power International",
  description: "Our corporate social responsibility programs supporting education, healthcare, infrastructure, and community development across West Africa.",
};

export default function CSRPage() {
  const focusAreas = [
    {
      title: "Education",
      description: "Building schools, providing learning materials, and supporting educational programs",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      projects: CSR_PROJECTS.filter((p) => p.category === "Education").length,
    },
    {
      title: "Healthcare",
      description: "Improving healthcare access and facilities in mining communities",
      icon: <Heart className="h-8 w-8" />,
      color: "from-red-500 to-red-600",
      projects: CSR_PROJECTS.filter((p) => p.category === "Healthcare").length,
    },
    {
      title: "Infrastructure",
      description: "Developing essential infrastructure like water access and roads",
      icon: <Building2 className="h-8 w-8" />,
      color: "from-gray-500 to-gray-600",
      projects: CSR_PROJECTS.filter((p) => p.category === "Infrastructure").length,
    },
    {
      title: "Community Development",
      description: "Skills training, youth programs, and economic empowerment",
      icon: <Users className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      projects: CSR_PROJECTS.filter((p) => p.category === "Community Development").length,
    },
    {
      title: "Environment",
      description: "Reforestation, conservation, and environmental restoration",
      icon: <Sprout className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      projects: CSR_PROJECTS.filter((p) => p.category === "Environment").length,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-700 via-red-600 to-rose-600 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-pink-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
            <p className="text-xl text-pink-100">
              Creating lasting positive impact in the communities where we operate through education, healthcare, infrastructure, and economic development
            </p>
          </div>
        </div>
      </section>

      {/* CSR Impact Metrics */}
      <ImpactMetrics focus="csr" showCharts={false} />

      {/* Focus Areas */}
      <section className="py-16">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our CSR Focus Areas</h2>
            <p className="text-gray-600">
              Strategic programs addressing community needs across five key areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <Card key={area.title} className="hover:shadow-xl transition-all group">
                <div className={`h-2 bg-gradient-to-r ${area.color}`} />
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-gold" />
                    <span className="font-semibold text-navy">{area.projects} Active Projects</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Featured CSR Projects</h2>
            <p className="text-gray-600">
              Recent and ongoing initiatives making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CSR_PROJECTS.slice(0, 6).map((project) => (
              <CSRProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gold hover:bg-gold-600 text-navy" asChild>
              <Link href="/sustainability/csr/projects">View All CSR Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <CommunityStories />

      {/* Our Approach */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our CSR Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Community Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We work closely with local leaders, community organizations, and government agencies to identify and address priority needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Community needs assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Co-design of programs with stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Local implementation partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Transparent communication and reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Sustainable Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our programs are designed for long-term sustainability, not short-term charity. We build capacity and empower communities.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Skills training and capacity building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Infrastructure with ongoing maintenance plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Economic opportunities for local businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Monitoring and evaluation of impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us on Community Impact</h2>
          <p className="text-gray-300 mb-8">
            We welcome partnerships with NGOs, government agencies, and community organizations to amplify our CSR impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-600 text-navy" asChild>
              <Link href="/partnerships">Explore Partnership Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
