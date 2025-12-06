import type { Metadata } from "next";
import { EquipmentCard } from "@/components/ui/EquipmentCard";
import { EQUIPMENT, getEquipmentByCategory } from "@/lib/constants/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Equipment Fleet | Yellow Power International",
  description: "Explore our modern fleet of drilling rigs, loaders, haul trucks, and support equipment for mining operations.",
};

const categories = [
  { id: "all", label: "All Equipment" },
  { id: "drill", label: "Drilling Rigs" },
  { id: "loader", label: "Loaders" },
  { id: "truck", label: "Haul Trucks" },
  { id: "excavator", label: "Excavators" },
  { id: "support", label: "Support Equipment" },
];

export default function EquipmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-600 to-navy-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Equipment Fleet
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our modern, well-maintained equipment fleet delivers reliability, efficiency, and 
              safety across all mining operations. Every machine is regularly serviced and operated 
              by certified, experienced professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">{EQUIPMENT.length}+</div>
              <div className="text-sm text-gray-600">Equipment Units</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">8+</div>
              <div className="text-sm text-gray-600">Drilling Rigs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">30+</div>
              <div className="text-sm text-gray-600">Load & Haul Fleet</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-gray-600">Maintenance Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Equipment Catalog
            </h2>
            <p className="text-lg text-gray-600">
              Browse our comprehensive fleet by category
            </p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="flex flex-wrap justify-center mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {EQUIPMENT.map((equipment) => (
                  <EquipmentCard key={equipment.id} equipment={equipment} />
                ))}
              </div>
            </TabsContent>

            {categories.slice(1).map((category) => {
              const categoryType = category.id as "drill" | "loader" | "truck" | "excavator" | "support";
              return (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getEquipmentByCategory(categoryType).map((equipment) => (
                      <EquipmentCard key={equipment.id} equipment={equipment} />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Maintenance Standards */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Maintenance & Standards
            </h2>
            <p className="text-lg text-gray-600">
              Industry-leading maintenance programs ensure maximum uptime and safety
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Preventive Maintenance
              </h3>
              <p className="text-gray-600">
                Scheduled maintenance following OEM recommendations
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600">
                GPS tracking and telemetry on all major equipment
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Certified Operators
              </h3>
              <p className="text-gray-600">
                All operators trained and certified to highest standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Equipment for Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us to discuss equipment availability and mobilization for your site
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
