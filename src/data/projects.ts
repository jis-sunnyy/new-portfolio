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
    title: "Sahari Cargo",
    subtitle: "International Cargo Management ERP",
    description:
      "A comprehensive ERP system integrating logistics, accounting, and tracking systems in a single scalable platform.",
    technologies: [
      "AWS",
      "Bluetooth Printer",
      "Barcode Printing",
      "Cloud Deployment",
      "React.js",
      "Node.js",
    ],
    highlights: [
      "Engineered a scalable ERP integrating logistics, accounting, and tracking systems",
      "Implemented barcode printing and automated cargo tracking, improving operational accuracy",
      "Advanced AWS infrastructure setup for high availability and fault tolerance",
    ],
    category: "ERP",
  },
  {
    id: 2,
    title: "Kenya Airways",
    subtitle: "Staff Travel Management System",
    description:
      "Enterprise travel management system for Kenya Airways staff with real-time flight booking and approval workflows.",
    technologies: [
      "Amadeus Flight API",
      "RBAC",
      "React.js",
      "Node.js",
      "PostgreSQL",
    ],
    highlights: [
      "Integrated Amadeus Flight APIs for real-time flight search, scheduling, and ticketing",
      "Built a secure RBAC system for employee travel management and approval workflows",
      "Deep experience in third-party API integration and airline domain data structures",
    ],
    category: "Travel",
  },
  {
    id: 3,
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
    id: 4,
    title: "Suprabhaatham",
    subtitle: "Daily News Portal",
    description:
      "Modern news portal with headless CMS integration, real-time notifications, and multi-language support.",
    technologies: [
      "Strapi CMS",
      "GraphQL",
      "Real-Time Notifications",
      "Next.js",
      "PostgreSQL",
    ],
    highlights: [
      "Integrated Strapi CMS for headless content management and editorial workflows",
      "Implemented GraphQL to enhance query performance and flexible data fetching",
      "Practical experience in real-time notifications and multi-language architecture",
    ],
    category: "CMS",
  },
  {
    id: 5,
    title: "Event Management CRM",
    subtitle: "International Event Management System",
    description:
      "Custom CRM solution for event management with real-time communication and client interaction workflows.",
    technologies: [
      "Sendbird SDK",
      "AWS",
      "React.js",
      "Node.js",
      "Real-time Chat",
    ],
    highlights: [
      "Developed custom CRM workflows for event registration, scheduling, and client interaction",
      "Integrated Sendbird for real-time chat and participant communication",
      "Client-facing project delivery experience from requirement gathering to live deployment",
    ],
    category: "CRM",
  },
  {
    id: 6,
    title: "Ticketing App - Teenzania",
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
