import { createAiDocument } from './documents';
import type { AiDocument } from './documents';
import { COMPANY_INFO } from '@/lib/constants/company';
import { SERVICES as SERVICE_DEFINITIONS } from '@/lib/constants/services';
import { OFFICE_LOCATIONS, DEPARTMENT_CONTACTS, EMERGENCY_CONTACT } from '@/lib/constants/offices';

export function buildKnowledgeBaseDocuments(): AiDocument[] {
  const docs: AiDocument[] = [];

  docs.push(
    createAiDocument({
      id: 'company-overview',
      title: 'Company Overview',
      content: `Yellow Power International is a mining support services company founded in ${COMPANY_INFO.founded} by ${COMPANY_INFO.founder}. The head office is located in ${COMPANY_INFO.location} with operations across ${COMPANY_INFO.offices} countries in Africa and North America. The company employs ${COMPANY_INFO.employees} professionals and focuses on delivering drilling, load and haul, and construction services for mining clients.`,
      source: 'Company information',
      url: '/',
      type: 'about',
      category: 'company',
      tags: ['about', 'company', 'overview'],
    })
  );

  SERVICE_DEFINITIONS.forEach((service) => {
    const contentParts = [
      service.longDescription,
      '',
      'Key benefits:',
      ...service.keyBenefits.map((b) => `- ${b}`),
      '',
      'Typical applications:',
      ...service.applications.map((a) => `- ${a}`),
      '',
      'Equipment types:',
      ...service.equipmentTypes.map((e) => `- ${e}`),
    ];

    const content = contentParts.join('\n');

    docs.push(
      createAiDocument({
        id: `service-${service.id}`,
        title: service.name,
        content,
        source: 'Services',
        url: `/services/${service.slug}`,
        type: 'service',
        category: 'services',
        tags: ['service', service.name],
      })
    );
  });

  docs.push(
    createAiDocument({
      id: 'services-overview',
      title: 'Services Overview',
      content: SERVICE_DEFINITIONS.map((s) => `${s.name}: ${s.shortDescription}`).join('\n\n'),
      source: 'Services',
      url: '/services',
      type: 'service',
      category: 'services',
      tags: ['services', 'overview'],
    })
  );

  OFFICE_LOCATIONS.forEach((office) => {
    const contentParts = [
      `Office name: ${office.name}`,
      `Country: ${office.country}`,
      `City: ${office.city}`,
      `Address: ${office.address}`,
      `Phone: ${office.phone}`,
      office.email ? `Email: ${office.email}` : '',
      office.operatingHours ? `Operating hours: ${office.operatingHours}` : '',
      office.services && office.services.length > 0
        ? ['Key services at this location:', ...office.services.map((s) => `- ${s}`)].join('\n')
        : '',
    ].filter(Boolean);

    docs.push(
      createAiDocument({
        id: `office-${office.id}`,
        title: `${office.name} (${office.country})`,
        content: contentParts.join('\n'),
        source: 'Office locations',
        url: '/about/global-presence',
        type: 'about',
        category: 'offices',
        tags: ['office', office.country, office.city],
      })
    );
  });

  docs.push(
    createAiDocument({
      id: 'contact-channels',
      title: 'How to Contact Yellow Power International',
      content: [
        'You can contact Yellow Power International through the contact page, phone, or email.',
        `Primary phone: ${COMPANY_INFO.phone1}`,
        `Secondary phone: ${COMPANY_INFO.phone2}`,
        `General email: ${COMPANY_INFO.email}`,
        '',
        'Department contacts:',
        ...DEPARTMENT_CONTACTS.map((dept) => {
          const lines = [
            `Department: ${dept.department}`,
            `Description: ${dept.description}`,
            `Email: ${dept.email}`,
          ];
          if (dept.phone) {
            lines.push(`Phone: ${dept.phone}`);
          }
          return lines.join(' | ');
        }),
        '',
        `Emergency support: ${EMERGENCY_CONTACT.title} (${EMERGENCY_CONTACT.phone})`,
      ].join('\n'),
      source: 'Contact information',
      url: '/contact',
      type: 'general',
      category: 'contact',
      tags: ['contact', 'support'],
    })
  );

  return docs;
}
