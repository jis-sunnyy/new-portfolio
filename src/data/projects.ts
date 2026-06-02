export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "sahari-cargo",
    title: "Sahari Cargo",
    subtitle: "International Cargo Management ERP",
    year: "2024",
    client: "Sahari Logistics",
    role: "Full Stack Engineer",
    description:
      "A comprehensive ERP system unifying logistics, accounting, and cargo tracking in a single scalable platform. Built end-to-end including AWS deployment, barcode printing integrations, and high-availability infrastructure.",
    problem:
      "Sahari was managing logistics, accounting, and tracking across disconnected tools, creating reconciliation overhead and tracking errors. They needed a unified platform that could scale across multiple branches and handle international cargo flows.",
    solution:
      "Designed a modular ERP with logistics, accounting, and tracking as connected subsystems sharing a common entity model. Integrated barcode printing for instant shipment labelling and built an AWS infrastructure with auto-scaling and failover.",
    technologies: [
      "React.js",
      "Node.js",
      "AWS",
      "Bluetooth Printer",
      "Barcode Printing",
      "PostgreSQL",
    ],
    highlights: [
      "Engineered a scalable ERP integrating logistics, accounting, and tracking systems",
      "Implemented barcode printing and automated cargo tracking, improving operational accuracy",
      "Advanced AWS infrastructure setup for high availability and fault tolerance",
      "Onsite deployment and training in Dubai",
    ],
    category: "ERP",
  },
  {
    id: 2,
    slug: "kenya-airways",
    title: "Kenya Airways",
    subtitle: "Staff Travel Management System",
    year: "2024",
    client: "Kenya Airways",
    role: "Full Stack Engineer",
    description:
      "Enterprise travel management system for Kenya Airways staff with real-time flight booking, approval workflows, and deep integration with the Amadeus airline API.",
    problem:
      "Kenya Airways needed a dedicated internal system for staff travel — bookings, approvals, ticketing, and policy enforcement — that talked directly to live airline inventory.",
    solution:
      "Built a secure RBAC-driven workflow engine on top of the Amadeus Flight API for real-time flight search and ticketing, with multi-level approval chains and audit logging.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Amadeus Flight API", "RBAC"],
    highlights: [
      "Integrated Amadeus Flight APIs for real-time flight search, scheduling, and ticketing",
      "Built a secure RBAC system for employee travel management and approval workflows",
      "Deep experience in third-party API integration and airline domain data structures",
      "Onsite delivery and training in Nairobi",
    ],
    category: "Travel",
  },
  {
    id: 3,
    slug: "xentrybook",
    title: "XentryBook",
    subtitle: "Gym Access & Biometric Management",
    year: "2023",
    client: "XentryBook",
    role: "Mobile Engineer",
    description:
      "Mobile application for gym access control with biometric attendance integration and real-time device-to-cloud synchronization.",
    problem:
      "Gym operators were juggling biometric hardware, paper logs, and disconnected attendance apps — leading to access disputes and lost revenue.",
    solution:
      "Built a React Native app that talks directly to ESSL biometric devices, syncs attendance in real time to a Node.js backend, and gives operators a single view of access events and member status.",
    technologies: ["React Native", "Node.js", "MongoDB", "ESSL Biometric SDK", "Real-time Sync"],
    highlights: [
      "Integrated biometric attendance devices for automated user access control",
      "Designed real-time synchronization between biometric devices and mobile apps",
      "Hardware-software communication protocols and authentication logic",
    ],
    category: "Mobile",
  },
  {
    id: 4,
    slug: "suprabhaatham",
    title: "Suprabhaatham",
    subtitle: "Daily News Portal",
    year: "2023",
    client: "Suprabhaatham Daily",
    role: "Full Stack Engineer",
    description:
      "Modern news portal with headless CMS, GraphQL data layer, real-time push notifications, and multi-language support.",
    problem:
      "A daily newspaper migrating to digital needed editorial speed without losing print-grade quality — and wanted multi-language delivery from a single editorial pipeline.",
    solution:
      "Paired Next.js for fast public delivery with Strapi as a headless CMS, GraphQL for query flexibility, and a real-time notification layer to push breaking news to readers.",
    technologies: ["Next.js", "Strapi CMS", "GraphQL", "PostgreSQL", "Real-Time Notifications"],
    highlights: [
      "Integrated Strapi CMS for headless content management and editorial workflows",
      "Implemented GraphQL to enhance query performance and flexible data fetching",
      "Real-time notifications and multi-language architecture",
    ],
    category: "CMS",
  },
  {
    id: 5,
    slug: "event-crm",
    title: "Event Management CRM",
    subtitle: "International Event CRM",
    year: "2023",
    client: "Confidential",
    role: "Full Stack Engineer",
    description:
      "Custom CRM for international event management with registration workflows, scheduling, and real-time participant communication.",
    problem:
      "An international events team was running registrations, communications, and post-event follow-ups across spreadsheets and email — losing context between touchpoints.",
    solution:
      "Built a tailored CRM that owns the full lifecycle — registration, scheduling, real-time chat via Sendbird, and analytics — deployed on AWS with end-to-end client involvement.",
    technologies: ["React.js", "Node.js", "Sendbird SDK", "AWS", "Real-time Chat"],
    highlights: [
      "Developed custom CRM workflows for event registration, scheduling, and client interaction",
      "Integrated Sendbird for real-time chat and participant communication",
      "Client-facing delivery from requirement gathering to live deployment",
    ],
    category: "CRM",
  },
  {
    id: 6,
    slug: "teenzania-ticketing",
    title: "Teenzania Ticketing",
    subtitle: "On-Site Ticketing & Loyalty",
    year: "2022",
    client: "Teenzania Events",
    role: "Mobile Engineer",
    description:
      "Mobile ticketing application with Bluetooth printer integration and built-in customer loyalty management.",
    problem:
      "On-site events needed instant ticket issuance and a loyalty program that staff could run from a phone — without depending on fragile point-of-sale terminals.",
    solution:
      "Built a React Native app with native Bluetooth printer integration for instant ticketing, role-based access for admins and staff, and a loyalty card system for customer retention.",
    technologies: ["React Native", "Node.js", "MongoDB", "Bluetooth Printer", "Loyalty System"],
    highlights: [
      "Built on-site ticketing and Bluetooth printer integration for instant ticket issuance",
      "Implemented role-based access for admins and staff",
      "Customer retention through a loyalty card feature",
    ],
    category: "Mobile",
  },
];
