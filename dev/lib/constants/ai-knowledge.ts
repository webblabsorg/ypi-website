/**
 * AI Knowledge Base - Curated content for PowerBot and AI Search
 * Structured documents for vector store indexing
 */

import type { AiDocument } from '../ai/documents';
import { createAiDocument } from '../ai/documents';

/**
 * Company overview and general information
 */
const COMPANY_DOCUMENTS: AiDocument[] = [
  createAiDocument({
    id: 'company-overview',
    title: 'Yellow Power International - Company Overview',
    content: `Yellow Power International (YPI) is a leading mining support services company established in 2017 by Mr. Emmanuel Kweku Ganu. Based in Madina, Greater Accra, Ghana, YPI has grown to employ between 201-500 professionals across three African countries: Ghana, Burkina Faso, and Côte d'Ivoire.

YPI specializes in comprehensive drilling and mining support services, providing state-of-the-art equipment and expert personnel to mining operations throughout West Africa. The company is committed to excellence, safety, and sustainable practices.

Contact Information:
- Phone: +233268066942, 0550099130
- Email: info@yellowpowerinternational.com
- Website: https://yellowpowerinternational.com
- Location: Madina, Greater Accra, Ghana`,
    source: 'Company Information',
    url: '/about',
    type: 'about',
    category: 'Company',
    tags: ['company', 'overview', 'about'],
  }),

  createAiDocument({
    id: 'mission-vision',
    title: 'Mission and Vision',
    content: `Mission: To provide world-class drilling and mining support services that exceed client expectations through innovation, safety excellence, and sustainable practices.

Vision: To be the most trusted and reliable mining support services partner in Africa, known for our commitment to safety, quality, and environmental responsibility.

Core Values:
- Safety First: Zero harm philosophy in all operations
- Excellence: Delivering superior results consistently
- Innovation: Investing in modern technology and equipment
- Sustainability: Environmental and social responsibility
- Integrity: Ethical business practices always`,
    source: 'About Us',
    url: '/about/mission-vision',
    type: 'about',
    category: 'Company Values',
    tags: ['mission', 'vision', 'values'],
  }),
];

/**
 * Services documentation
 */
const SERVICES_DOCUMENTS: AiDocument[] = [
  createAiDocument({
    id: 'service-pre-split-drilling',
    title: 'Pre-Split Drilling Services',
    content: `Pre-Split Drilling is a specialized technique used to create a smooth, stable wall along the final excavation boundary. This service is essential for controlling blast damage and ensuring the structural integrity of remaining rock walls.

Key Features:
- Precision drilling with Atlas Copco ROC drills
- Wall stability and control
- Reduced overbreak and damage to remaining walls
- Enhanced safety for mining operations
- Typical capacity: 300-500 meters per shift

Applications: Used in open-pit mines, quarries, and construction projects where precise boundary control is critical.

YPI's expert operators ensure optimal hole spacing, depth, and charging patterns for maximum effectiveness.`,
    source: 'Services',
    url: '/services/pre-split-drilling',
    type: 'service',
    category: 'Drilling',
    tags: ['pre-split', 'drilling', 'wall control'],
  }),

  createAiDocument({
    id: 'service-production-drilling',
    title: 'Production Drilling Services',
    content: `Production Drilling is the primary method for creating blast holes in mining operations, enabling efficient ore extraction through controlled blasting.

Key Features:
- High-capacity Sandvik rotary drills
- Mass ore extraction capabilities
- Optimized blast patterns
- Efficient material fragmentation
- Typical capacity: 1,000-2,000 meters per shift

Applications: Open-pit mining, quarrying, and large-scale excavation projects.

YPI uses modern GPS-guided drilling systems for precise hole placement and depth control, maximizing blast effectiveness and reducing costs.`,
    source: 'Services',
    url: '/services/production-drilling',
    type: 'service',
    category: 'Drilling',
    tags: ['production', 'drilling', 'blasting'],
  }),

  createAiDocument({
    id: 'service-rc-drilling',
    title: 'Reverse Circulation (RC) Drilling Services',
    content: `Reverse Circulation (RC) Drilling is an exploration and grade control technique that provides high-quality rock samples for geological analysis.

Key Features:
- Schramm RC drilling rigs
- Rapid sample collection
- Minimal sample contamination
- Accurate geological data
- Typical capacity: 150-300 meters per day

Applications: Mineral exploration, resource definition, grade control, and geotechnical investigations.

RC drilling is cost-effective for exploration programs and provides reliable data for resource estimation.`,
    source: 'Services',
    url: '/services/reverse-circulation-drilling',
    type: 'service',
    category: 'Drilling',
    tags: ['RC drilling', 'exploration', 'sampling'],
  }),

  createAiDocument({
    id: 'service-load-haul',
    title: 'Load & Haul Operations',
    content: `Load & Haul services provide comprehensive material handling solutions for mining operations, including loading, hauling, and placement of ore, waste rock, and other materials.

Key Features:
- Fleet of 20+ haul trucks (40-100 tonne capacity)
- 10+ front-end loaders
- Efficient logistics coordination
- Real-time fleet management
- Qualified operators

Applications: Ore transport, waste removal, stockpile management, and material placement.

YPI's modern fleet and experienced operators ensure maximum productivity and minimal downtime.`,
    source: 'Services',
    url: '/services/load-haul',
    type: 'service',
    category: 'Operations',
    tags: ['load and haul', 'trucking', 'material handling'],
  }),

  createAiDocument({
    id: 'service-construction',
    title: 'Construction Services',
    content: `YPI provides comprehensive construction services for mining infrastructure, including roads, pads, ramps, and site preparation.

Key Features:
- 15+ construction machines
- Earthmoving and grading
- Road construction and maintenance
- Site preparation and development
- Capacity: 50,000 cubic meters per month

Applications: Access roads, haul roads, drilling pads, stockpile areas, and mine infrastructure.

Experienced construction teams ensure projects are completed safely, on time, and to specification.`,
    source: 'Services',
    url: '/services/construction',
    type: 'service',
    category: 'Construction',
    tags: ['construction', 'infrastructure', 'earthmoving'],
  }),
];

/**
 * Careers and employment information
 */
const CAREERS_DOCUMENTS: AiDocument[] = [
  createAiDocument({
    id: 'careers-overview',
    title: 'Careers at Yellow Power International',
    content: `Join Yellow Power International and be part of a dynamic team delivering excellence in mining support services across West Africa.

Why Join YPI:
- Competitive compensation packages
- Comprehensive training programs
- Career advancement opportunities
- Safety-first culture
- Modern equipment and technology
- Work across multiple African countries

Job Categories:
- Drilling Operations (Drill Operators, Drill Assistants)
- Engineering (Mining Engineers, Mechanical Engineers)
- Technical Roles (Technicians, Mechanics)
- Load & Haul Operations (Truck Operators, Loader Operators)
- Construction (Equipment Operators, Supervisors)
- Safety & Health (Safety Officers, HSE Managers)
- Corporate (HR, Finance, Administration)

Application Process:
1. Browse current openings on our careers page
2. Submit application with CV/resume
3. Initial screening and interview
4. Technical assessment (if applicable)
5. Final interview and offer

Contact: careers@yellowpowerinternational.com`,
    source: 'Careers',
    url: '/careers',
    type: 'career',
    category: 'Employment',
    tags: ['careers', 'jobs', 'employment', 'hiring'],
  }),

  createAiDocument({
    id: 'training-development',
    title: 'Training and Development Programs',
    content: `YPI invests heavily in employee training and development to ensure safety, competence, and career growth.

Training Programs:
- Pre-employment safety orientation
- Equipment-specific operation training
- Monthly safety refresher courses
- Emergency response training
- Leadership development for supervisors
- Technical certifications and licenses
- Continuous skills upgrading

Career Progression:
- Clear advancement pathways
- Mentorship programs
- Performance-based promotions
- Cross-training opportunities
- Support for professional certifications

YPI believes in developing talent from within and providing opportunities for employees to grow with the company.`,
    source: 'Careers',
    url: '/careers/training',
    type: 'career',
    category: 'Training',
    tags: ['training', 'development', 'education'],
  }),
];

/**
 * Sustainability and CSR information
 */
const SUSTAINABILITY_DOCUMENTS: AiDocument[] = [
  createAiDocument({
    id: 'safety-excellence',
    title: 'Safety Excellence and Zero Harm Philosophy',
    content: `Safety is YPI's top priority. We operate under a zero harm philosophy, ensuring all employees return home safely every day.

Safety Highlights:
- 487+ accident-free days (as of 2024)
- Comprehensive safety training for all personnel
- Regular equipment maintenance and inspections
- Emergency response protocols
- Safety certifications and compliance

Safety Programs:
- Pre-employment safety orientation
- Equipment-specific training
- Monthly safety refresher courses
- Incident investigation and learning
- Safety audits and inspections
- Personal protective equipment (PPE) provision

YPI maintains industry-leading safety standards and continuously improves safety practices through employee engagement and technology adoption.`,
    source: 'Sustainability',
    url: '/sustainability/safety',
    type: 'sustainability',
    category: 'Safety',
    tags: ['safety', 'zero harm', 'health'],
  }),

  createAiDocument({
    id: 'environmental-responsibility',
    title: 'Environmental Responsibility',
    content: `YPI is committed to minimizing environmental impact through eco-friendly practices and modern equipment.

Environmental Initiatives:
- Fuel-efficient equipment
- Emissions reduction programs
- Dust suppression systems
- Noise management
- Water conservation
- 18% CO2 reduction achieved in 2024

Sustainable Practices:
- Regular equipment maintenance for optimal efficiency
- GPS-guided systems to minimize waste
- Environmental monitoring and reporting
- Compliance with environmental regulations
- Community environmental education

YPI continuously seeks ways to improve environmental performance and contribute to sustainable mining practices.`,
    source: 'Sustainability',
    url: '/sustainability/environment',
    type: 'sustainability',
    category: 'Environment',
    tags: ['environment', 'sustainability', 'green'],
  }),

  createAiDocument({
    id: 'csr-programs',
    title: 'Corporate Social Responsibility (CSR) Programs',
    content: `YPI actively supports communities where we operate through targeted CSR programs in education, healthcare, and infrastructure.

CSR Focus Areas:
- Education: School infrastructure improvements, scholarships, learning materials
- Healthcare: Facility upgrades, medical equipment donations, health awareness
- Infrastructure: Community roads, water access, recreational facilities
- Community Development: Skills training, local employment, small business support

Impact:
- Multiple schools supported across Ghana, Burkina Faso, and Côte d'Ivoire
- Healthcare facilities improved
- Local employment opportunities created
- Community infrastructure enhanced

YPI believes in giving back to communities and fostering long-term positive relationships through meaningful CSR initiatives.`,
    source: 'Sustainability',
    url: '/sustainability/csr',
    type: 'sustainability',
    category: 'CSR',
    tags: ['CSR', 'community', 'social responsibility'],
  }),
];

/**
 * Combined knowledge base
 */
export const AI_KNOWLEDGE_BASE: AiDocument[] = [
  ...COMPANY_DOCUMENTS,
  ...SERVICES_DOCUMENTS,
  ...CAREERS_DOCUMENTS,
  ...SUSTAINABILITY_DOCUMENTS,
];

/**
 * Get documents by type
 */
export function getDocumentsByType(type: AiDocument['type']): AiDocument[] {
  return AI_KNOWLEDGE_BASE.filter((doc) => doc.type === type);
}

/**
 * Get document by ID
 */
export function getDocumentById(id: string): AiDocument | undefined {
  return AI_KNOWLEDGE_BASE.find((doc) => doc.id === id);
}

/**
 * Search documents by keyword
 */
export function searchDocuments(keyword: string): AiDocument[] {
  const lowerKeyword = keyword.toLowerCase();
  return AI_KNOWLEDGE_BASE.filter(
    (doc) =>
      doc.title.toLowerCase().includes(lowerKeyword) ||
      doc.content.toLowerCase().includes(lowerKeyword) ||
      doc.metadata?.tags?.some((tag) => tag.toLowerCase().includes(lowerKeyword))
  );
}
