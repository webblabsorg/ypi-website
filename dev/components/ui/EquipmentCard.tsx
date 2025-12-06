import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Equipment } from "@/lib/constants/services";

interface EquipmentCardProps {
  equipment: Equipment;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const categoryColors = {
    drill: "bg-blue-100 text-blue-800",
    loader: "bg-green-100 text-green-800",
    truck: "bg-yellow-100 text-yellow-800",
    excavator: "bg-orange-100 text-orange-800",
    support: "bg-purple-100 text-purple-800",
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        {equipment.image ? (
          <div className="relative w-full aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={equipment.image}
              alt={equipment.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full aspect-video mb-4 bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🚜</div>
              <p className="text-sm">Equipment Photo</p>
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <Badge className={categoryColors[equipment.category]}>
            {equipment.category.charAt(0).toUpperCase() + equipment.category.slice(1)}
          </Badge>
          <CardTitle className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
            {equipment.name}
          </CardTitle>
          <p className="text-sm text-gray-600">{equipment.capacity}</p>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-navy mb-2">Specifications:</h4>
          <dl className="space-y-1">
            {equipment.specs.map((spec, index) => (
              <div key={index} className="flex justify-between text-sm">
                <dt className="text-gray-600">{spec.label}:</dt>
                <dd className="font-medium text-navy">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </CardContent>
    </Card>
  );
}
