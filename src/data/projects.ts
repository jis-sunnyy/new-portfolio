export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "ADFW 2024",
    subtitle: "Event Management System – Abu Dhabi Finance Week",
    description:
      "Custom event management CRM for Abu Dhabi Finance Week 2024, supporting registration, scheduling, and real-time attendee communication.",
    technologies: [
      "Next.js",
      "NestJS",
      "Node.js",
      "Sendbird SDK",
      "AWS",
      "Strapi CMS",
    ],
    highlights: [
      "Developed a custom CRM for event registration, scheduling, and attendee engagement",
      "Integrated Sendbird SDK for real-time chat and participant communication",
      "Delivered a scalable platform supporting event coordination and client interaction workflows",
    ],
    category: "CRM",
  },
  {
    id: 2,
    title: "Alaba Marketplace",
    subtitle: "Multi-Vendor E-commerce Platform",
    description:
      "Scalable multi-vendor e-commerce marketplace with web and mobile apps, supporting product listings, order management, and secure payment workflows.",
    technologies: [
      "Next.js",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "Azure",
    ],
    highlights: [
      "Designed and developed a scalable marketplace supporting multi-vendor product listings and order management",
      "Built responsive web and mobile applications enabling seamless shopping experiences across devices",
      "Architected and deployed cloud infrastructure on Azure with scalable backend services",
    ],
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Sahari Cargo",
    subtitle: "International Cargo Management ERP",
    description:
      "A comprehensive ERP system integrating shipment tracking, accounting, and warehouse operations in a single scalable platform.",
    technologies: [
      "React.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Barcode Printing",
      "Bluetooth Printer",
    ],
    highlights: [
      "Designed and developed a scalable cargo logistics ERP integrating shipment tracking, accounting, and warehouse operations",
      "Implemented barcode-based cargo tracking and automated label printing, improving warehouse efficiency",
      "Architected and deployed scalable AWS infrastructure ensuring high availability",
    ],
    category: "ERP",
  },
  {
    id: 4,
    title: "Kenya Airways",
    subtitle: "Facility Management System",
    description:
      "Platform for managing facility maintenance requests, service scheduling, and vendor coordination with WhatsApp ticketing and AI-based ticket creation.",
    technologies: [
      "React.js",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "WhatsApp Ticketing",
      "AI Ticket Creation",
    ],
    highlights: [
      "Developed a platform for managing facility maintenance requests, service scheduling, and vendor coordination",
      "Implemented role-based dashboards for administrators, service providers, and customers",
      "Designed APIs and reporting modules to track service performance and operational efficiency",
    ],
    category: "Enterprise",
  },
  {
    id: 5,
    title: "Kenya Airways",
    subtitle: "Staff Travel Management System",
    description:
      "Enterprise travel management system for Kenya Airways staff with real-time flight booking via Amadeus API and secure approval workflows.",
    technologies: [
      "React.js",
      "NestJS",
      "Amadeus API",
      "RBAC",
      "PostgreSQL",
    ],
    highlights: [
      "Integrated Amadeus Flight APIs for real-time flight search, booking, and staff travel scheduling",
      "Implemented secure role-based access control (RBAC) for employee travel approvals and administrative workflows",
    ],
    category: "Travel",
  },
  {
    id: 6,
    title: "Suprabhaatham",
    subtitle: "Daily News Portal",
    description:
      "Modern news portal with headless CMS integration, GraphQL APIs, real-time notifications, and multi-language support.",
    technologies: [
      "Next.js",
      "React.js",
      "Strapi CMS",
      "GraphQL",
      "Node.js",
      "PostgreSQL",
    ],
    highlights: [
      "Developed a headless CMS architecture using Strapi for efficient content publishing and editorial workflows",
      "Implemented GraphQL APIs to improve data querying efficiency and frontend performance",
      "Designed scalable infrastructure supporting multi-language content and real-time notifications",
    ],
    category: "CMS",
  },
  {
    id: 7,
    title: "XentryBook",
    subtitle: "Gym Access & Biometric Management App",
    description:
      "Mobile application for gym access control with biometric attendance integration and real-time synchronization.",
    technologies: [
      "React Native",
      "ESSL Biometric SDK",
      "Real-time Sync",
      "Node.js",
      "MongoDB",
    ],
    highlights: [
      "Integrated biometric attendance devices for automated user access control",
      "Designed real-time synchronization between biometric devices and mobile apps",
      "Enhanced understanding of hardware-software communication protocols and authentication logic",
    ],
    category: "Mobile",
  },
  {
    id: 8,
    title: "Teenzania",
    subtitle: "On-Site Ticketing & Loyalty System",
    description:
      "Mobile ticketing application with Bluetooth printer integration and customer loyalty management features.",
    technologies: [
      "React Native",
      "Bluetooth Printer",
      "Loyalty System",
      "Node.js",
      "MongoDB",
    ],
    highlights: [
      "Built on-site ticketing and Bluetooth printer integration for instant ticket issuance",
      "Implemented role-based access for admins and staff",
      "Customer retention systems through loyalty card feature development",
    ],
    category: "Mobile",
  },
];