import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileCheck, Users, Shield, AlertCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Ethical Business Practices | Yellow Power International",
  description: "Our commitment to transparency, compliance, responsible governance, and ethical business conduct in all operations.",
};

export default function EthicsPage() {
  const principles = [
    {
      title: "Transparency & Accountability",
      icon: <FileCheck className="h-8 w-8" />,
      description: "Open communication with stakeholders and accountability for our actions",
      commitments: [
        "Regular reporting to stakeholders",
        "Public disclosure of CSR activities",
        "Financial transparency and audits",
        "Open communication channels",
      ],
    },
    {
      title: "Fair Labor Practices",
      icon: <Users className="h-8 w-8" />,
      description: "Respecting workers' rights and providing fair employment conditions",
      commitments: [
        "Fair wages and benefits",
        "Safe working conditions",
        "No child or forced labor",
        "Freedom of association",
      ],
    },
    {
      title: "Anti-Corruption",
      icon: <Shield className="h-8 w-8" />,
      description: "Zero tolerance for bribery, corruption, and unethical business practices",
      commitments: [
        "Anti-bribery policies",
        "Due diligence on business partners",
        "Whistleblower protection",
        "Regular ethics training",
      ],
    },
    {
      title: "Regulatory Compliance",
      icon: <Scale className="h-8 w-8" />,
      description: "Meeting and exceeding legal and regulatory requirements",
      commitments: [
        "Mining regulations compliance",
        "Environmental law adherence",
        "Tax compliance",
        "Industry standards certification",
      ],
    },
    {
      title: "Human Rights",
      icon: <Users className="h-8 w-8" />,
      description: "Respecting and promoting human rights in all operations",
      commitments: [
        "UN Guiding Principles alignment",
        "Community rights protection",
        "Indigenous peoples' rights",
        "Gender equality promotion",
      ],
    },
    {
      title: "Responsible Supply Chain",
      icon: <Award className="h-8 w-8" />,
      description: "Ensuring ethical practices throughout our supply chain",
      commitments: [
        "Supplier code of conduct",
        "Regular supplier audits",
        "Local sourcing preference",
        "Conflict-free minerals",
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-violet-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ethical Business Practices</h1>
            <p className="text-xl text-violet-100">
              Operating with integrity, transparency, and accountability in all aspects of our business
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Ethical Commitment</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Yellow Power International is committed to conducting business ethically and responsibly. We believe that strong ethical foundations are essential for long-term success and sustainable relationships with all stakeholders.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-navy to-navy-600 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gold">Our Ethics Vision</h3>
                  <p className="text-gray-200">
                    To be recognized as a mining services leader that exemplifies ethical excellence, earns trust through transparent operations, and creates shared value for all stakeholders while maintaining unwavering integrity in every business decision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gold">Code of Conduct</h3>
                  <p className="text-gray-200">
                    Our Code of Conduct guides employee behavior and decision-making. It applies to all directors, officers, employees, contractors, and business partners, ensuring consistent ethical standards across our operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ethical Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Ethical Principles</h2>
            <p className="text-gray-600">
              Six pillars guiding our business conduct
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <Card key={principle.title} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-4">
                    {principle.icon}
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-navy mb-3 text-sm">Our Commitments:</h4>
                  <ul className="space-y-2">
                    {principle.commitments.map((commitment, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span className="text-gray-700">{commitment}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Corporate Governance</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Board Oversight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our Board of Directors provides oversight of ethical conduct and ensures management accountability for upholding our values.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Regular ethics and compliance reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Annual ethics and compliance review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Independent audit committee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Risk management oversight</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Compliance Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We maintain a comprehensive compliance program to ensure adherence to laws, regulations, and our own ethical standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Dedicated compliance officer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Regular compliance training for all employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Internal and external audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Continuous monitoring and improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Whistleblower Protection */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl">
          <Card className="border-2 border-orange-500">
            <CardHeader className="bg-orange-50">
              <div className="flex items-center gap-4">
                <AlertCircle className="h-12 w-12 text-orange-600" />
                <div>
                  <CardTitle className="text-2xl text-orange-900">Speak Up - Whistleblower Protection</CardTitle>
                  <p className="text-orange-700 mt-1">We protect those who report concerns in good faith</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Employees, contractors, and stakeholders can report ethical concerns, violations of our Code of Conduct, or suspected illegal activities through our confidential reporting channels.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">How to Report:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Anonymous ethics hotline: Available 24/7</li>
                      <li>• Email: ethics@yellowpower.com</li>
                      <li>• Direct to supervisor or HR</li>
                      <li>• Online reporting portal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Our Commitment:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Zero retaliation against whistleblowers</li>
                      <li>• Confidential investigation</li>
                      <li>• Timely response and resolution</li>
                      <li>• Protection of reporter identity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Certifications & Compliance</h2>
            <p className="text-gray-600">
              Recognized standards and certifications demonstrating our commitment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "ISO 45001", desc: "Occupational Health & Safety" },
              { title: "Industry Standards", desc: "Mining sector compliance" },
              { title: "Local Regulations", desc: "Full legal compliance" },
              { title: "Annual Audits", desc: "Third-party verification" },
            ].map((cert, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 mx-auto mb-4 text-gold" />
                  <h3 className="font-bold text-navy mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Ethical Practices?</h2>
          <p className="text-gray-300 mb-8">
            We welcome inquiries about our business ethics, compliance programs, and governance structures.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold-600 text-navy" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
