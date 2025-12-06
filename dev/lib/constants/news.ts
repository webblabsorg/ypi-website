// News articles, press releases data models and constants

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Projects' | 'Equipment' | 'Awards' | 'Company News';
  tags: string[];
  publishedAt: string;
  author: string;
  heroImage: string;
  featured?: boolean;
}

export interface PressRelease {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
  pdfUrl?: string;
}

// Sample news articles
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: 'ypi-completes-major-project-tarkwa',
    title: 'Yellow Power International Completes Major Production Drilling Project at Tarkwa',
    excerpt: 'Successfully completed a 6-month production drilling contract at one of Ghana\'s largest gold mines, drilling over 50,000 meters.',
    content: `
      <p>Yellow Power International is proud to announce the successful completion of a major production drilling project at the Tarkwa Gold Mine in Ghana's Western Region. The six-month contract, which concluded ahead of schedule, involved drilling over 50,000 meters of blast holes for the mine's production operations.</p>
      
      <p>The project showcased YPI's commitment to excellence and safety, achieving zero lost-time incidents throughout the entire operation. Our team of skilled drill operators and technicians worked around the clock using state-of-the-art Atlas Copco drill rigs to ensure maximum productivity and efficiency.</p>
      
      <p>"This project demonstrates our capability to handle large-scale mining operations while maintaining the highest safety standards," said Emmanuel Kweku Ganu, Founder and CEO of Yellow Power International. "Our team's dedication and expertise were key to delivering this project on time and within budget."</p>
      
      <p>The Tarkwa project utilized YPI's fleet of modern production drilling equipment, including multiple Sandvik DR460i rotary blast hole drills. These state-of-the-art machines enabled the team to achieve drilling rates of up to 300 meters per day, significantly exceeding industry standards.</p>
      
      <h3>Key Project Highlights</h3>
      <ul>
        <li>Total meters drilled: 50,000+</li>
        <li>Zero lost-time incidents</li>
        <li>Completed 2 weeks ahead of schedule</li>
        <li>Average drilling rate: 280 meters/day</li>
        <li>Peak productivity: 350 meters/day</li>
      </ul>
      
      <p>This successful project has further strengthened YPI's reputation as a leading mining support services provider in Ghana and across West Africa. The company continues to expand its operations and invest in cutting-edge equipment to serve the growing needs of the mining industry.</p>
    `,
    category: 'Projects',
    tags: ['Production Drilling', 'Tarkwa', 'Project Completion', 'Safety'],
    publishedAt: '2024-11-15',
    author: 'YPI Communications Team',
    heroImage: '/images/news/tarkwa-project.jpg',
    featured: true,
  },
  {
    slug: 'new-fleet-expansion-2024',
    title: 'YPI Invests $5M in New Equipment Fleet Expansion',
    excerpt: 'Major investment in state-of-the-art drilling equipment and haul trucks to expand service capabilities across Africa.',
    content: `
      <p>Yellow Power International has announced a significant $5 million investment in new equipment, marking one of the largest fleet expansions in the company's history. The investment includes the acquisition of advanced drilling rigs, haul trucks, and auxiliary equipment to support growing demand across Ghana, Burkina Faso, and Côte d'Ivoire.</p>
      
      <p>The new equipment includes three Sandvik DI550 surface drilling rigs, four Caterpillar 777G haul trucks, two Komatsu PC1250 excavators, and various support vehicles. All equipment features the latest technology for improved productivity, fuel efficiency, and operator safety.</p>
      
      <h3>Equipment Breakdown</h3>
      <ul>
        <li><strong>Drilling Equipment:</strong> 3 x Sandvik DI550 surface drills with automated rod handling</li>
        <li><strong>Haul Trucks:</strong> 4 x Caterpillar 777G (100-ton capacity)</li>
        <li><strong>Excavators:</strong> 2 x Komatsu PC1250 (120-ton class)</li>
        <li><strong>Support Equipment:</strong> Graders, water trucks, fuel bowsers</li>
      </ul>
      
      <p>"This investment demonstrates our commitment to providing our clients with the most advanced and reliable equipment in the industry," said Mr. Ganu. "The new fleet will enable us to take on larger projects and deliver even better results for our mining partners."</p>
      
      <p>The equipment procurement process began six months ago and involved comprehensive evaluations of various manufacturers. YPI selected equipment based on reliability, performance, fuel efficiency, and after-sales support availability in Africa.</p>
      
      <p>The new equipment is expected to increase YPI's operational capacity by 40% and will be deployed across multiple project sites starting in January 2025. All operators and maintenance personnel are currently undergoing intensive training programs to ensure optimal equipment utilization and maintenance.</p>
    `,
    category: 'Equipment',
    tags: ['Fleet Expansion', 'Investment', 'New Equipment', 'Growth'],
    publishedAt: '2024-10-28',
    author: 'YPI Communications Team',
    heroImage: '/images/news/new-equipment.jpg',
    featured: true,
  },
  {
    slug: 'ypi-wins-excellence-award',
    title: 'YPI Wins "Mining Support Services Excellence Award 2024"',
    excerpt: 'Recognized for outstanding safety record, operational excellence, and contribution to Ghana\'s mining industry.',
    content: `
      <p>Yellow Power International has been honored with the prestigious "Mining Support Services Excellence Award 2024" at the Ghana Mining Industry Awards held in Accra. The award recognizes YPI's exceptional safety record, operational excellence, and significant contribution to the growth of Ghana's mining sector.</p>
      
      <p>The Ghana Chamber of Mines, which organized the awards ceremony, highlighted YPI's achievement of over 1,000 consecutive days without a lost-time incident across all operations. This safety milestone represents approximately 2.5 million man-hours worked without a serious injury.</p>
      
      <h3>Award Recognition Criteria</h3>
      <ul>
        <li>Outstanding safety performance and HSE management</li>
        <li>Operational excellence and client satisfaction</li>
        <li>Investment in modern equipment and technology</li>
        <li>Contribution to local employment and skills development</li>
        <li>Corporate social responsibility initiatives</li>
      </ul>
      
      <p>"This award belongs to our entire team – from our drill operators in the field to our support staff in the offices," said Emmanuel Kweku Ganu while accepting the award. "Their dedication to safety, quality, and excellence has made Yellow Power International a trusted partner in Ghana's mining industry."</p>
      
      <p>The judges particularly commended YPI's investment in employee training and development, noting that the company has trained over 150 drill operators and heavy equipment operators since 2017. Many of these trained personnel have gone on to leadership positions within the company and the broader mining industry.</p>
      
      <p>YPI also received special recognition for its community engagement programs, including support for local schools, healthcare facilities, and infrastructure development in mining communities.</p>
    `,
    category: 'Awards',
    tags: ['Awards', 'Recognition', 'Safety', 'Excellence'],
    publishedAt: '2024-09-20',
    author: 'YPI Communications Team',
    heroImage: '/images/news/excellence-award.jpg',
    featured: true,
  },
  {
    slug: 'burkina-faso-operations-launch',
    title: 'YPI Launches Operations in Burkina Faso',
    excerpt: 'Expanding regional presence with new office and equipment deployment to support growing mining activities in West Africa.',
    content: `
      <p>Yellow Power International has officially launched operations in Burkina Faso, marking a significant milestone in the company's regional expansion strategy. The new office in Ouagadougou will serve as a hub for YPI's operations across Burkina Faso and will support the company's growing portfolio of projects in the country.</p>
      
      <p>The Burkina Faso office is YPI's third international location, complementing existing operations in Ghana and Côte d'Ivoire. The launch comes in response to increasing demand for professional drilling and mining support services from major mining companies operating in Burkina Faso's gold mining belt.</p>
      
      <p>"Burkina Faso represents an exciting growth opportunity for YPI," explained Mr. Ganu. "The country's mining sector is expanding rapidly, and we're well-positioned to provide the high-quality services that mining companies need to succeed."</p>
      
      <h3>Initial Operations</h3>
      <ul>
        <li>Office location: Ouagadougou, Burkina Faso</li>
        <li>Initial team: 25 personnel (local and expatriate)</li>
        <li>Equipment deployed: 2 drill rigs, 3 haul trucks, support vehicles</li>
        <li>Services offered: Production drilling, reverse circulation drilling, load & haul</li>
        <li>Active contracts: 2 major mining projects secured</li>
      </ul>
      
      <p>YPI has already secured two significant contracts with major mining companies in Burkina Faso, with drilling operations expected to commence in January 2025. The company plans to recruit and train local personnel, contributing to employment creation and skills development in the region.</p>
      
      <p>The Burkina Faso expansion is part of YPI's broader strategy to establish a strong presence across West Africa's major mining countries. The company is also evaluating opportunities in Mali and Senegal as part of its long-term growth plans.</p>
    `,
    category: 'Company News',
    tags: ['Expansion', 'Burkina Faso', 'International', 'Growth'],
    publishedAt: '2024-08-10',
    author: 'YPI Communications Team',
    heroImage: '/images/news/burkina-faso-launch.jpg',
  },
  {
    slug: 'rc-drilling-exploration-success',
    title: 'YPI Reverse Circulation Drilling Team Discovers High-Grade Mineralization',
    excerpt: 'Exploration drilling project in northern Ghana identifies promising gold mineralization zones for client.',
    content: `
      <p>Yellow Power International's Reverse Circulation (RC) drilling team has contributed to a significant exploration success in northern Ghana, where drilling operations identified multiple zones of high-grade gold mineralization. The discovery marks an important milestone for both YPI and the exploration company client.</p>
      
      <p>The RC drilling program, which spanned four months and included over 15,000 meters of drilling across 85 holes, was conducted using YPI's state-of-the-art Schramm T450XD RC drill rigs. The project showcased YPI's technical expertise in exploration drilling and sample collection.</p>
      
      <h3>Project Details</h3>
      <ul>
        <li>Location: Northern Ghana (Specific location confidential)</li>
        <li>Drilling method: Reverse Circulation (RC)</li>
        <li>Total meters drilled: 15,000+</li>
        <li>Number of holes: 85</li>
        <li>Duration: 4 months</li>
        <li>Discovery: Multiple high-grade gold mineralization zones</li>
      </ul>
      
      <p>"Exploration drilling requires precision, quality control, and meticulous attention to sampling procedures," explained YPI's Chief Geologist. "Our team's expertise and our investment in quality RC equipment enabled us to deliver reliable, high-quality samples that led to this discovery."</p>
      
      <p>RC drilling is a critical service in mineral exploration, providing rapid drilling speeds and continuous rock chip samples that geologists use to identify mineralization. YPI's RC drilling services include quality control measures such as duplicate sampling, field standards, and regular equipment calibration to ensure sample integrity.</p>
      
      <p>Following this exploration success, the client has already committed to a second phase of drilling, which will further delineate the mineralized zones and is expected to commence in Q1 2025. YPI will continue to provide RC drilling services for the expanded program.</p>
      
      <p>This project reinforces YPI's reputation as a leading exploration drilling contractor in West Africa and demonstrates the company's technical capabilities in supporting mineral discoveries.</p>
    `,
    category: 'Projects',
    tags: ['RC Drilling', 'Exploration', 'Success', 'Gold'],
    publishedAt: '2024-07-15',
    author: 'YPI Communications Team',
    heroImage: '/images/news/rc-drilling.jpg',
  },
  {
    slug: 'iso-certification-achievement',
    title: 'YPI Achieves ISO 45001 and ISO 14001 Certification',
    excerpt: 'International certification for occupational health & safety and environmental management systems.',
    content: `
      <p>Yellow Power International has successfully achieved ISO 45001:2018 (Occupational Health and Safety Management) and ISO 14001:2015 (Environmental Management Systems) certifications, reinforcing the company's commitment to world-class safety and environmental standards.</p>
      
      <p>The certifications, awarded by an internationally accredited certification body following rigorous audits, validate YPI's systematic approach to managing health, safety, and environmental risks across all operations.</p>
      
      <h3>Certification Scope</h3>
      <ul>
        <li><strong>ISO 45001:2018</strong> - Occupational Health and Safety Management Systems</li>
        <li><strong>ISO 14001:2015</strong> - Environmental Management Systems</li>
        <li><strong>Scope:</strong> Drilling services, load & haul operations, and construction services</li>
        <li><strong>Coverage:</strong> All YPI operations in Ghana, Côte d'Ivoire, and Burkina Faso</li>
      </ul>
      
      <p>"These certifications demonstrate to our clients and stakeholders that YPI operates to internationally recognized standards," said the YPI HSE Manager. "They provide independent verification of our safety and environmental management systems and our commitment to continuous improvement."</p>
      
      <p>The certification process involved comprehensive documentation of YPI's HSE policies, procedures, and practices, followed by detailed on-site audits at multiple locations. The auditors assessed everything from risk management processes to emergency response procedures, training programs, and incident investigation systems.</p>
      
      <p>To achieve and maintain these certifications, YPI underwent extensive preparation, including:</p>
      <ul>
        <li>Development and implementation of comprehensive management systems</li>
        <li>Training of all personnel on new procedures and requirements</li>
        <li>Internal audits to identify and address gaps</li>
        <li>Establishment of performance indicators and monitoring systems</li>
        <li>Integration of continuous improvement processes</li>
      </ul>
      
      <p>The certifications are valid for three years, with annual surveillance audits to ensure ongoing compliance. YPI has committed to maintaining and continuously improving its HSE management systems in line with these international standards.</p>
    `,
    category: 'Company News',
    tags: ['Certification', 'ISO', 'Safety', 'Environment'],
    publishedAt: '2024-06-05',
    author: 'YPI Communications Team',
    heroImage: '/images/news/iso-certification.jpg',
  },
];

// Sample press releases
export const PRESS_RELEASES: PressRelease[] = [
  {
    id: 'pr-001',
    title: 'Yellow Power International Announces Q4 2024 Financial Results',
    publishedAt: '2024-11-30',
    summary: 'YPI reports 35% revenue growth year-over-year, driven by increased project activity and fleet expansion.',
    pdfUrl: '/documents/press-releases/q4-2024-results.pdf',
  },
  {
    id: 'pr-002',
    title: 'YPI Partners with Leading Equipment Manufacturer for West Africa Distribution',
    publishedAt: '2024-10-15',
    summary: 'Strategic partnership to provide sales, service, and parts support for drilling equipment across West Africa.',
    pdfUrl: '/documents/press-releases/equipment-partnership.pdf',
  },
  {
    id: 'pr-003',
    title: 'Yellow Power International Launches Graduate Training Program',
    publishedAt: '2024-09-01',
    summary: 'New program aims to train 50 mining engineering graduates annually in drilling and mining operations.',
    pdfUrl: '/documents/press-releases/graduate-program-launch.pdf',
  },
  {
    id: 'pr-004',
    title: 'YPI Commits to Net-Zero Carbon Emissions by 2035',
    publishedAt: '2024-07-20',
    summary: 'Comprehensive sustainability strategy includes transition to electric equipment and renewable energy.',
    pdfUrl: '/documents/press-releases/net-zero-commitment.pdf',
  },
  {
    id: 'pr-005',
    title: 'Yellow Power International Opens New Regional Office in Côte d\'Ivoire',
    publishedAt: '2024-05-10',
    summary: 'Expansion into Ivorian mining sector with new office in Abidjan and equipment deployment.',
    pdfUrl: '/documents/press-releases/cote-divoire-office.pdf',
  },
];

// News categories for filtering
export const NEWS_CATEGORIES = [
  'All',
  'Projects',
  'Equipment',
  'Awards',
  'Company News',
] as const;

// Helper functions
export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((article) => article.slug === slug);
}

export function getFeaturedNews(): NewsArticle[] {
  return NEWS_ARTICLES.filter((article) => article.featured);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  if (category === 'All') return NEWS_ARTICLES;
  return NEWS_ARTICLES.filter((article) => article.category === category);
}

export function getRelatedNews(currentSlug: string, limit: number = 3): NewsArticle[] {
  const currentArticle = getNewsArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  return NEWS_ARTICLES
    .filter(
      (article) =>
        article.slug !== currentSlug && article.category === currentArticle.category
    )
    .slice(0, limit);
}
