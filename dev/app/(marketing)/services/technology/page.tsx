import type { Metadata } from "next";
import { CheckCircle2, Cpu, Radio, Shield, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology & Innovation | Yellow Power International",
  description: "Discover how Yellow Power leverages GPS-guided systems, real-time monitoring, and modern technology to deliver superior mining services.",
};

const technologies = [
  {
    icon: <Radio className="h-8 w-8" />,
    title: "GPS-Guided Drilling Systems",
    description: "Millimeter-accurate hole placement using advanced GPS guidance technology on all drilling rigs.",
    benefits: [
      "±50mm accuracy at 30m depth",
      "Real-time position verification",
      "Reduced surveying requirements",
      "Improved blast outcomes",
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Fleet Management Systems",
    description: "Real-time tracking and monitoring of all equipment for optimized operations and maintenance.",
    benefits: [
      "Live equipment location tracking",
      "Fuel consumption monitoring",
      "Operator behavior analytics",
      "Predictive maintenance alerts",
    ],
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Telemetry & Diagnostics",
    description: "Advanced diagnostic systems provide real-time equipment health monitoring and analysis.",
    benefits: [
      "Engine performance metrics",
      "Component wear monitoring",
      "Fault code detection",
      "Maintenance scheduling optimization",
    ],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Safety Technology",
    description: "Collision avoidance, operator alertness monitoring, and safety compliance systems.",
    benefits: [
      "Proximity detection systems",
      "Fatigue management monitoring",
      "Emergency shutdown protocols",
      "Incident reporting automation",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-600 to-navy-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology & Innovation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Leveraging state-of-the-art technology to deliver precision, efficiency, and safety 
              in every aspect of our mining support services.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Modern systems that set us apart in the mining services industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-semibold text-navy mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tech.description}
                </p>
                <div className="space-y-3">
                  {tech.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Innovation Commitment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We continuously invest in technology and training to stay at the forefront 
              of the mining services industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Technology Investment
              </h3>
              <p className="text-gray-600">
                Annual reinvestment in equipment upgrades and new technology systems
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Operator Training
              </h3>
              <p className="text-gray-600">
                Comprehensive training programs on all new systems and equipment
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Industry Partnerships
              </h3>
              <p className="text-gray-600">
                Collaboration with equipment manufacturers and technology providers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Technology Benefits for Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Improved accuracy and precision in all operations",
              "Reduced downtime through predictive maintenance",
              "Enhanced safety with collision avoidance systems",
              "Better project management with real-time data",
              "Optimized fuel efficiency and cost savings",
              "Comprehensive reporting and analytics",
              "Faster mobilization and setup times",
              "Reduced environmental impact",
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            See Our Technology in Action
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a site visit to see how our technology delivers superior results
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-600 text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
