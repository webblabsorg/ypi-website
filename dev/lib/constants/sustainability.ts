/**
 * Sustainability, Safety, and CSR data models for Yellow Power International
 */

export interface SafetyMetric {
  label: string;
  value: number;
  unit: string;
  target?: number;
  period: string;
  icon?: string;
}

export interface IncidentTrendPoint {
  month: string;
  incidents: number;
  nearMisses: number;
  trainingHours: number;
}

export interface EnvironmentalMetric {
  category: string;
  value: number;
  unit: string;
  year: number;
  change?: number; // percentage change from previous year
}

export interface CSRProject {
  id: string;
  title: string;
  slug: string;
  location: string;
  country: string;
  category: "Education" | "Healthcare" | "Infrastructure" | "Community Development" | "Environment";
  impactSummary: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  year: number;
  status: "completed" | "ongoing";
  beneficiaries?: number;
}

export interface CommunityStory {
  id: string;
  name: string;
  role: string; // "Community Member" | "Employee" | "Student" | "Local Leader"
  location: string;
  story: string;
  quote: string;
  image?: string;
  videoUrl?: string;
}

// Safety Statistics (Placeholder Data)
export const SAFETY_METRICS: SafetyMetric[] = [
  {
    label: "Accident-Free Days",
    value: 487,
    unit: "days",
    target: 365,
    period: "Current Streak",
    icon: "🛡️",
  },
  {
    label: "Safety Training Hours",
    value: 12450,
    unit: "hours",
    period: "2024 YTD",
    icon: "📚",
  },
  {
    label: "Lost Time Injury Frequency Rate",
    value: 0.12,
    unit: "per million hours",
    target: 0.5,
    period: "2024",
    icon: "📊",
  },
  {
    label: "Safety Inspections Completed",
    value: 1248,
    unit: "inspections",
    period: "2024 YTD",
    icon: "✅",
  },
  {
    label: "Near Miss Reports",
    value: 89,
    unit: "reports",
    period: "2024 YTD",
    icon: "⚠️",
  },
  {
    label: "Equipment Maintenance Completion Rate",
    value: 98.5,
    unit: "%",
    target: 95,
    period: "2024",
    icon: "🔧",
  },
];

// Incident Trends (for charts)
export const INCIDENT_TRENDS: IncidentTrendPoint[] = [
  { month: "Jan", incidents: 0, nearMisses: 8, trainingHours: 1245 },
  { month: "Feb", incidents: 0, nearMisses: 6, trainingHours: 1180 },
  { month: "Mar", incidents: 1, nearMisses: 9, trainingHours: 1320 },
  { month: "Apr", incidents: 0, nearMisses: 7, trainingHours: 1250 },
  { month: "May", incidents: 0, nearMisses: 5, trainingHours: 1400 },
  { month: "Jun", incidents: 0, nearMisses: 8, trainingHours: 1350 },
  { month: "Jul", incidents: 0, nearMisses: 4, trainingHours: 1280 },
  { month: "Aug", incidents: 0, nearMisses: 6, trainingHours: 1420 },
  { month: "Sep", incidents: 0, nearMisses: 7, trainingHours: 1385 },
  { month: "Oct", incidents: 0, nearMisses: 5, trainingHours: 1290 },
  { month: "Nov", incidents: 0, nearMisses: 6, trainingHours: 1330 },
];

// Environmental Metrics
export const ENVIRONMENTAL_METRICS: EnvironmentalMetric[] = [
  {
    category: "CO2 Emissions Reduction",
    value: 18,
    unit: "% reduction",
    year: 2024,
    change: 5,
  },
  {
    category: "Fuel Efficiency Improvement",
    value: 12,
    unit: "% improvement",
    year: 2024,
    change: 3,
  },
  {
    category: "Dust Suppression Coverage",
    value: 95,
    unit: "% of operations",
    year: 2024,
    change: 8,
  },
  {
    category: "Noise Level Compliance",
    value: 98,
    unit: "% compliance",
    year: 2024,
    change: 2,
  },
  {
    category: "Water Conservation",
    value: 22,
    unit: "% reduction in usage",
    year: 2024,
    change: 7,
  },
  {
    category: "Waste Recycling Rate",
    value: 76,
    unit: "% recycled",
    year: 2024,
    change: 12,
  },
];

// CSR Projects
export const CSR_PROJECTS: CSRProject[] = [
  {
    id: "csr-001",
    title: "Madina Community School Renovation",
    slug: "madina-school-renovation",
    location: "Madina, Greater Accra",
    country: "Ghana",
    category: "Education",
    impactSummary: "Renovated 12 classrooms, provided learning materials for 450 students, and built modern toilet facilities",
    description: "In partnership with the Madina Local Education Authority, Yellow Power International led a comprehensive renovation of Madina Community School. The project included rebuilding classroom blocks, installing modern educational technology, providing desks and chairs, and constructing sanitation facilities. The initiative has significantly improved the learning environment for hundreds of children.",
    metrics: [
      { label: "Classrooms Renovated", value: "12" },
      { label: "Students Benefited", value: "450" },
      { label: "Teachers Trained", value: "24" },
      { label: "Project Investment", value: "GHS 280,000" },
    ],
    image: "/images/csr/school-renovation.jpg",
    year: 2023,
    status: "completed",
    beneficiaries: 450,
  },
  {
    id: "csr-002",
    title: "Tarkwa Healthcare Center Medical Equipment Donation",
    slug: "tarkwa-healthcare-equipment",
    location: "Tarkwa, Western Region",
    country: "Ghana",
    category: "Healthcare",
    impactSummary: "Donated essential medical equipment worth GHS 150,000 to improve healthcare delivery for 10,000+ community members",
    description: "Yellow Power International donated critical medical equipment including examination tables, patient monitors, laboratory equipment, and emergency response kits to Tarkwa Healthcare Center. The donation addresses equipment shortages and improves the facility's capacity to serve mining communities and surrounding areas.",
    metrics: [
      { label: "Equipment Items Donated", value: "45" },
      { label: "Community Members Served", value: "10,000+" },
      { label: "Healthcare Staff Trained", value: "18" },
      { label: "Donation Value", value: "GHS 150,000" },
    ],
    image: "/images/csr/healthcare-donation.jpg",
    year: 2024,
    status: "completed",
    beneficiaries: 10000,
  },
  {
    id: "csr-003",
    title: "Obuasi Community Water Access Project",
    slug: "obuasi-water-access",
    location: "Obuasi, Ashanti Region",
    country: "Ghana",
    category: "Infrastructure",
    impactSummary: "Constructed 8 boreholes with hand pumps providing clean water access to 3,500 residents",
    description: "Recognizing the critical need for clean water in mining communities, Yellow Power International funded and constructed eight mechanized boreholes across four communities near Obuasi. Each borehole is equipped with hand pumps and protected water collection points. The project includes community training on maintenance and water quality management.",
    metrics: [
      { label: "Boreholes Constructed", value: "8" },
      { label: "Beneficiaries", value: "3,500" },
      { label: "Communities Served", value: "4" },
      { label: "Water Committees Trained", value: "4" },
    ],
    image: "/images/csr/water-project.jpg",
    year: 2023,
    status: "completed",
    beneficiaries: 3500,
  },
  {
    id: "csr-004",
    title: "Sikasso Youth Skills Training Program",
    slug: "sikasso-youth-training",
    location: "Sikasso, Mali",
    country: "Mali",
    category: "Community Development",
    impactSummary: "Trained 85 young people in technical skills including welding, mechanics, and equipment operation",
    description: "In collaboration with local technical institutes, Yellow Power International launched a six-month vocational training program for unemployed youth in Sikasso. The program covers heavy equipment operation, welding, automotive mechanics, and electrical systems. Graduates receive certifications and priority consideration for employment with YPI and partner companies.",
    metrics: [
      { label: "Youth Trained", value: "85" },
      { label: "Skills Certifications Awarded", value: "85" },
      { label: "Employment Rate", value: "72%" },
      { label: "Program Duration", value: "6 months" },
    ],
    image: "/images/csr/youth-training.jpg",
    year: 2024,
    status: "ongoing",
    beneficiaries: 85,
  },
  {
    id: "csr-005",
    title: "Banfora Reforestation Initiative",
    slug: "banfora-reforestation",
    location: "Banfora, Burkina Faso",
    country: "Burkina Faso",
    category: "Environment",
    impactSummary: "Planted 15,000 trees to restore degraded land and offset operational emissions",
    description: "As part of our environmental commitment, Yellow Power International partnered with local environmental groups to plant 15,000 native trees in areas affected by mining activities near Banfora. The reforestation project includes ongoing maintenance, community education on conservation, and monitoring of tree survival rates. The initiative helps restore biodiversity, prevent soil erosion, and offset carbon emissions.",
    metrics: [
      { label: "Trees Planted", value: "15,000" },
      { label: "Hectares Restored", value: "45" },
      { label: "Community Volunteers", value: "120" },
      { label: "Estimated CO2 Offset", value: "3,000 tons/year" },
    ],
    image: "/images/csr/reforestation.jpg",
    year: 2024,
    status: "ongoing",
    beneficiaries: 5000,
  },
  {
    id: "csr-006",
    title: "Mobile Health Clinic Partnership",
    slug: "mobile-health-clinic",
    location: "Multiple Sites, Ghana",
    country: "Ghana",
    category: "Healthcare",
    impactSummary: "Sponsored quarterly mobile health clinics serving remote mining communities",
    description: "Yellow Power International sponsors quarterly mobile health clinics in partnership with Ghana Health Service. The clinics visit remote communities near our operation sites, providing free health screenings, vaccinations, maternal health services, and health education. Each clinic serves 200-300 people per visit.",
    metrics: [
      { label: "Communities Visited", value: "12" },
      { label: "Patients Screened", value: "2,800+" },
      { label: "Vaccinations Administered", value: "1,200" },
      { label: "Clinic Visits per Year", value: "4" },
    ],
    image: "/images/csr/mobile-clinic.jpg",
    year: 2024,
    status: "ongoing",
    beneficiaries: 3000,
  },
];

// Community Stories
export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: "story-001",
    name: "Akosua Mensah",
    role: "Community Member",
    location: "Madina, Ghana",
    story: "Before Yellow Power renovated our school, my children were learning in classrooms with broken windows and leaking roofs. Now they have a safe, modern environment with proper desks and learning materials. My daughter's grades have improved significantly, and she dreams of becoming an engineer.",
    quote: "Yellow Power didn't just renovate a building – they invested in our children's future. The impact on education in our community has been transformational.",
    image: "/images/testimonials/akosua.jpg",
  },
  {
    id: "story-002",
    name: "Kwame Asante",
    role: "Equipment Operator",
    location: "Tarkwa, Ghana",
    story: "I joined Yellow Power as a trainee three years ago with no formal skills. Through their comprehensive training program and commitment to safety, I'm now a certified heavy equipment operator with opportunities for career growth. The company's safety culture has given me confidence that I'll return home safely to my family every day.",
    quote: "Yellow Power invests in its people. The skills and values I've learned here have changed my life and provided security for my family.",
    image: "/images/testimonials/kwame.jpg",
  },
  {
    id: "story-003",
    name: "Nurse Abena Osei",
    role: "Healthcare Worker",
    location: "Tarkwa Healthcare Center, Ghana",
    story: "The medical equipment donation from Yellow Power has revolutionized our ability to provide quality healthcare. We can now conduct proper diagnostic tests, monitor patients effectively, and handle emergencies with confidence. The training they provided ensured our staff can use everything properly.",
    quote: "This donation has saved lives. We're now able to provide healthcare services that were previously only available in larger cities.",
    image: "/images/testimonials/abena.jpg",
  },
  {
    id: "story-004",
    name: "Ibrahim Traoré",
    role: "Youth Training Graduate",
    location: "Sikasso, Mali",
    story: "The skills training program gave me practical skills in welding and equipment maintenance that I couldn't afford to learn otherwise. Within two months of graduating, I secured employment with a mining contractor. I'm now supporting my family and planning to start my own workshop in the future.",
    quote: "Yellow Power's training program didn't just teach me skills – it gave me a career path and hope for the future.",
    image: "/images/testimonials/ibrahim.jpg",
  },
  {
    id: "story-005",
    name: "Chief Kofi Addo",
    role: "Community Leader",
    location: "Obuasi, Ghana",
    story: "Access to clean water has been a challenge in our communities for decades. The boreholes constructed by Yellow Power have eliminated the need for women and children to walk kilometers for water. This has freed up time for education and economic activities, and significantly reduced waterborne diseases in our area.",
    quote: "Yellow Power understands that corporate success must include community development. Their water project has improved quality of life for thousands in our communities.",
    image: "/images/testimonials/chief-kofi.jpg",
  },
];

// Helper functions
export function getCSRProjectsByCategory(category: CSRProject["category"]): CSRProject[] {
  return CSR_PROJECTS.filter((project) => project.category === category);
}

export function getCSRProjectBySlug(slug: string): CSRProject | undefined {
  return CSR_PROJECTS.find((project) => project.slug === slug);
}

export function getCompletedCSRProjects(): CSRProject[] {
  return CSR_PROJECTS.filter((project) => project.status === "completed");
}

export function getOngoingCSRProjects(): CSRProject[] {
  return CSR_PROJECTS.filter((project) => project.status === "ongoing");
}

export function getTotalBeneficiaries(): number {
  return CSR_PROJECTS.reduce((total, project) => total + (project.beneficiaries || 0), 0);
}

export function getCSRProjectsByCountry(country: string): CSRProject[] {
  return CSR_PROJECTS.filter((project) => project.country === country);
}
