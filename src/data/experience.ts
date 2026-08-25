// ---------------------------------------------------------------------
// Career history.
//
// To add a role:      copy a block and drop it in.
// To remove a role:   delete its block.
// To reorder:         move blocks around — the section renders them in
//                     array order, so put the most recent first.
//
// `id` only needs to be unique; it is never displayed.
// `highlights` can hold as many or as few bullets as you like.
// `location` is optional — leave it out and nothing renders.
// ---------------------------------------------------------------------

export interface Role {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experienceData: Role[] = [
  {
    id: "armia-software-engineer",
    title: "Software Engineer",
    company: "Armia Systems Private Limited",
    location: "Infopark, Kochi",
    period: "2026 — Present",
    summary:
      "Building cross-platform mobile applications with React Native, backed by Node.js APIs and MongoDB.",
    highlights: [
      "Mobile app development with React Native",
      "API development with Node.js",
      "Data modelling and persistence with MongoDB",
    ],
  },
  {
    id: "bryt-solutions-consultant",
    title: "Technical Consultant",
    company: "Bryt Solutions Inc.",
    location: "Canada",
    period: "2026 — Present",
    summary:
      "Developing and delivering full-stack web and mobile applications using modern technologies across frontend, backend and cross-platform development.",
    highlights: [
      "Full-stack application development with React, Next.js and Node.js",
      "Web application development using React and Next.js",
      "Cross-platform mobile application development with React Native",
      "Backend API development and integration with Node.js",
    ],
  },

  {
    id: "bairuhatech-engineer",
    title: "Senior Software Engineer",
    location: "Kozhikode",
    company: "Bairuhatech LLP",
    period: "2022 — 2026",
    summary:
      "Led architecture and delivery of production web and mobile applications across logistics, facility management and enterprise SaaS. Owned cloud infrastructure on AWS and Scaleway, built the CI/CD pipelines, and ran on-site enterprise deployments in Dubai and Nairobi.",
    highlights: [
      "On-site enterprise deployments in Dubai (UAE) and Nairobi (Kenya)",
      "Cloud architecture on AWS and Scaleway for high-availability workloads",
      "CI/CD pipelines and DevOps automation across the delivery pipeline",
      "AI-assisted development with Claude Code and Cursor",
    ],
  },
  {
    id: "tcs-process-associate",
    title: "Associate",
    company: "Tata Consultancy Services",
    location: "Bangalore",
    period: "2019 — 2022",
    summary:
      "Supported enterprise operations by automating internal workflows and optimising process. Collaborated with global teams and wrote technical documentation for internal tooling.",
    highlights: [
      "Workflow automation that improved operational efficiency",
      "Global team collaboration on client support",
      "Technical documentation and process improvement",
    ],
  },
];
