export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  keyBenefits: string[];
  applications: string[];
  equipmentTypes: string[];
  safetyHighlights: string[];
  technicalSpecs?: { label: string; value: string }[];
}

export interface Equipment {
  id: string;
  name: string;
  category: "drill" | "loader" | "truck" | "excavator" | "support";
  capacity: string;
  specs: { label: string; value: string }[];
  image?: string;
  services: string[]; // Service IDs that use this equipment
}

export const SERVICES: Service[] = [
  {
    id: "pre-split-drilling",
    slug: "pre-split-drilling",
    name: "Pre-Split Drilling",
    shortDescription: "Precision drilling for controlled blast fragmentation and wall stability in open pit mines.",
    longDescription: "Our pre-split drilling service creates a fracture plane between the final wall and the production blast, ensuring smooth blast results and stable pit walls. Using advanced GPS-guided equipment, we deliver millimeter-accurate hole placement for optimal fragmentation control.",
    icon: "Drill",
    keyBenefits: [
      "Improved wall stability and reduced overbreak",
      "Better fragmentation control for easier material handling",
      "Enhanced safety through controlled blast effects",
      "Reduced blast vibration impact on nearby structures",
      "Cost savings through optimized explosive usage",
    ],
    applications: [
      "Open pit mining final wall creation",
      "Quarry bench stabilization",
      "Civil construction rock excavation",
      "Slope angle optimization",
    ],
    equipmentTypes: ["Atlas Copco ROC drills", "GPS guidance systems", "Air compressors"],
    safetyHighlights: [
      "Certified operators with 10+ years experience",
      "Daily equipment safety inspections",
      "Real-time monitoring and reporting",
      "Zero accident record since 2020",
    ],
    technicalSpecs: [
      { label: "Hole Diameter", value: "76mm - 165mm" },
      { label: "Drilling Depth", value: "Up to 40m" },
      { label: "Accuracy", value: "±50mm deviation at 30m depth" },
      { label: "Production Rate", value: "300-500m per shift" },
    ],
  },
  {
    id: "production-drilling",
    slug: "production-drilling",
    name: "Production Drilling",
    shortDescription: "High-capacity drilling operations for mass ore extraction in mining environments.",
    longDescription: "Our production drilling service delivers high-volume, efficient drilling for blast hole preparation in mining operations. Utilizing state-of-the-art rotary and DTH drilling rigs, we ensure consistent hole quality and maximize drilling productivity to keep your mine on schedule.",
    icon: "Construction",
    keyBenefits: [
      "High production rates to meet tight schedules",
      "Consistent hole quality for optimal blasting results",
      "Fleet of modern, well-maintained drilling rigs",
      "24/7 operations capability",
      "Real-time progress reporting and monitoring",
    ],
    applications: [
      "Open pit ore and waste drilling",
      "Large-scale quarrying operations",
      "Infrastructure development",
      "Bulk earthworks preparation",
    ],
    equipmentTypes: ["Sandvik drills", "Rotary blast hole drills", "Down-the-hole hammers"],
    safetyHighlights: [
      "Comprehensive operator training programs",
      "Preventive maintenance scheduling",
      "Dust suppression systems on all rigs",
      "Emergency response protocols",
    ],
    technicalSpecs: [
      { label: "Hole Diameter", value: "115mm - 311mm" },
      { label: "Drilling Depth", value: "Up to 50m" },
      { label: "Production Rate", value: "1,000-2,000m per shift" },
      { label: "Fleet Size", value: "8 active drilling rigs" },
    ],
  },
  {
    id: "reverse-circulation-drilling",
    slug: "reverse-circulation-drilling",
    name: "Reverse Circulation Drilling",
    shortDescription: "Advanced RC drilling for mineral exploration and grade control sampling.",
    longDescription: "Reverse circulation drilling provides reliable, contamination-free samples for mineral exploration and mine grade control. Our experienced crews and modern RC rigs deliver accurate geological data crucial for ore body delineation and mining optimization.",
    icon: "Search",
    keyBenefits: [
      "High-quality, uncontaminated samples",
      "Fast drilling rates for cost-effective exploration",
      "Accurate geological logging",
      "Experienced exploration geologists on team",
      "Comprehensive sample management and chain of custody",
    ],
    applications: [
      "Mineral exploration and resource definition",
      "Grade control drilling in active mines",
      "Geotechnical investigation",
      "Water well drilling",
    ],
    equipmentTypes: ["RC drilling rigs", "Sample splitters", "Air compressors", "Support vehicles"],
    safetyHighlights: [
      "Environmental best practices for drill site management",
      "Water management and recycling systems",
      "Safe handling of geological samples",
      "Regular equipment certification",
    ],
    technicalSpecs: [
      { label: "Hole Diameter", value: "100mm - 165mm" },
      { label: "Drilling Depth", value: "Up to 500m" },
      { label: "Sample Recovery", value: ">95%" },
      { label: "Drilling Rate", value: "150-300m per day" },
    ],
  },
  {
    id: "load-haul",
    slug: "load-haul",
    name: "Load & Haul Operations",
    shortDescription: "Efficient material transport with modern fleet of loaders and haul trucks.",
    longDescription: "Our load and haul services provide comprehensive material handling solutions for mining and construction sites. With a modern fleet of articulated dump trucks, rigid frame trucks, and wheel loaders, we ensure efficient movement of ore, waste, and construction materials.",
    icon: "Truck",
    keyBenefits: [
      "Modern, fuel-efficient fleet",
      "GPS tracking and fleet management systems",
      "Experienced operators and maintenance team",
      "Flexible capacity to scale with project needs",
      "24/7 operations support",
    ],
    applications: [
      "Ore transport from pit to ROM pad",
      "Waste haulage to dumps",
      "Topsoil and overburden stripping",
      "Construction material delivery",
    ],
    equipmentTypes: ["CAT haul trucks", "Komatsu wheel loaders", "Articulated dump trucks", "Excavators"],
    safetyHighlights: [
      "Collision avoidance systems on all vehicles",
      "Fatigue management programs",
      "Regular driver training and assessments",
      "Vehicle pre-start inspections",
    ],
    technicalSpecs: [
      { label: "Truck Capacity", value: "40-100 tonnes" },
      { label: "Loader Capacity", value: "5-15 m³ bucket" },
      { label: "Fleet Size", value: "20+ trucks, 10+ loaders" },
      { label: "Haul Distance", value: "Up to 10km optimized" },
    ],
  },
  {
    id: "construction",
    slug: "construction",
    name: "Construction Services",
    shortDescription: "Comprehensive construction support for mining infrastructure and civil projects.",
    longDescription: "Beyond drilling and hauling, we provide full construction services including road building, pad construction, water management, and site preparation. Our integrated approach ensures seamless project delivery from planning through execution.",
    icon: "Hammer",
    keyBenefits: [
      "Integrated service delivery reduces coordination overhead",
      "Experienced civil construction team",
      "Own equipment fleet for fast mobilization",
      "Quality assurance and project management",
      "Environmental compliance and rehabilitation",
    ],
    applications: [
      "Haul road construction and maintenance",
      "ROM pad and stockpile area preparation",
      "Water management infrastructure",
      "Site rehabilitation and closure works",
    ],
    equipmentTypes: ["Graders", "Rollers", "Dozers", "Water trucks", "Excavators"],
    safetyHighlights: [
      "Site-specific safety plans",
      "Traffic management protocols",
      "Environmental monitoring",
      "Regular safety audits and inspections",
    ],
    technicalSpecs: [
      { label: "Road Construction", value: "Up to 5km per month" },
      { label: "Earthworks", value: "50,000 m³ per month capacity" },
      { label: "Equipment Fleet", value: "15+ construction machines" },
      { label: "Project Management", value: "Certified PM team" },
    ],
  },
];

export const EQUIPMENT: Equipment[] = [
  {
    id: "eq-001",
    name: "Atlas Copco FlexiROC T45",
    category: "drill",
    capacity: "76-127mm hole diameter",
    specs: [
      { label: "Drilling Method", value: "Top hammer" },
      { label: "Max Hole Depth", value: "40m" },
      { label: "Engine Power", value: "160 kW" },
      { label: "Feed Length", value: "4.5m" },
    ],
    services: ["pre-split-drilling", "production-drilling"],
  },
  {
    id: "eq-002",
    name: "Sandvik DR461i Rotary Drill",
    category: "drill",
    capacity: "229-311mm hole diameter",
    specs: [
      { label: "Drilling Method", value: "Rotary tricone" },
      { label: "Max Hole Depth", value: "50m" },
      { label: "Engine Power", value: "485 kW" },
      { label: "Compressor", value: "Built-in 42 m³/min" },
    ],
    services: ["production-drilling"],
  },
  {
    id: "eq-003",
    name: "Schramm T685WS RC Rig",
    category: "drill",
    capacity: "140-165mm hole diameter",
    specs: [
      { label: "Drilling Method", value: "Reverse circulation" },
      { label: "Max Hole Depth", value: "500m" },
      { label: "Compressor", value: "1500 cfm @ 350 psi" },
      { label: "Rod Handling", value: "Automated" },
    ],
    services: ["reverse-circulation-drilling"],
  },
  {
    id: "eq-004",
    name: "CAT 777G Haul Truck",
    category: "truck",
    capacity: "100 tonne payload",
    specs: [
      { label: "Engine", value: "CAT C32 ACERT" },
      { label: "Engine Power", value: "938 kW" },
      { label: "Body Capacity", value: "58.7 m³" },
      { label: "Max Speed", value: "64 km/h" },
    ],
    services: ["load-haul"],
  },
  {
    id: "eq-005",
    name: "Komatsu WA600-8 Wheel Loader",
    category: "loader",
    capacity: "10.5 m³ bucket",
    specs: [
      { label: "Engine", value: "Komatsu SAA6D140E-7" },
      { label: "Engine Power", value: "357 kW" },
      { label: "Operating Weight", value: "54,460 kg" },
      { label: "Dump Clearance", value: "3,290 mm" },
    ],
    services: ["load-haul", "construction"],
  },
  {
    id: "eq-006",
    name: "Volvo A45G Articulated Dump Truck",
    category: "truck",
    capacity: "42 tonne payload",
    specs: [
      { label: "Engine", value: "Volvo D13J" },
      { label: "Engine Power", value: "335 kW" },
      { label: "Body Capacity", value: "28 m³" },
      { label: "Max Speed", value: "55 km/h" },
    ],
    services: ["load-haul"],
  },
  {
    id: "eq-007",
    name: "CAT D8T Dozer",
    category: "excavator",
    capacity: "6.7 m³ blade",
    specs: [
      { label: "Engine", value: "CAT C15 ACERT" },
      { label: "Engine Power", value: "235 kW" },
      { label: "Operating Weight", value: "37,200 kg" },
      { label: "Ground Pressure", value: "108 kPa" },
    ],
    services: ["construction"],
  },
  {
    id: "eq-008",
    name: "CAT 16M3 Motor Grader",
    category: "support",
    capacity: "4.9m blade",
    specs: [
      { label: "Engine", value: "CAT C13 ACERT" },
      { label: "Engine Power", value: "287 kW" },
      { label: "Operating Weight", value: "26,370 kg" },
      { label: "Max Speed", value: "44 km/h" },
    ],
    services: ["construction"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getEquipmentByService(serviceId: string): Equipment[] {
  return EQUIPMENT.filter((equipment) => equipment.services.includes(serviceId));
}

export function getEquipmentByCategory(category: Equipment["category"]): Equipment[] {
  return EQUIPMENT.filter((equipment) => equipment.category === category);
}
