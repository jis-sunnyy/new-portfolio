// Identity, about, stack and career content.
// Projects live in ./projects.ts (extended with case-study fields).

export const identity = {
  firstName: "Jis",
  lastName: "Sunny",
  role: "Full Stack Engineer",
  based: "Calicut, IN",
  timezone: "GMT+5:30",
  yearsActive: "5+",
  email: "jis.sunny@gmail.com",
  github: "github.com/jissunny",
  githubUrl: "https://github.com/jissunny",
  linkedin: "linkedin.com/in/jis-sunny",
  linkedinUrl: "https://www.linkedin.com/in/jis-sunny-28241815a/",
  resumeUrl: "/Jis_Software_Engineer_CV.pdf",
};

export const about = {
  lede: "I build elegant, scalable systems for businesses that need to ship. From cloud architecture to AI integration — I turn complex requirements into production software that holds up under real load.",
  cards: [
    {
      title: "What I do",
      body: "I work across the full stack — architecting ERPs, integrating AI, building mobile apps. My work has powered teams in healthcare, e-commerce, aviation, and logistics.",
    },
    {
      title: "How I work",
      body: "Great software is collaborative. I've led teams and worked directly with clients across India, UAE, and Africa — translating business needs into technical solutions that deliver.",
    },
    {
      title: "What I value",
      body: "Reliability over hype. Clear systems, instrumented code, sane defaults. I'd rather ship something dependable than something clever.",
    },
  ],
};

export interface StackCategory {
  title: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    title: "frontend",
    items: ["React / Next.js", "React Native", "TypeScript", "Tailwind CSS", "Redux / Zustand"],
  },
  {
    title: "backend",
    items: ["Node.js / NestJS", "Express", "Python / Django", "GraphQL / REST", "WebSockets"],
  },
  {
    title: "data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector databases"],
  },
  {
    title: "infrastructure",
    items: ["AWS (EC2, S3)", "Docker", "CI/CD pipelines", "Nginx", "Cloud deployment"],
  },
  {
    title: "ai & ml",
    items: ["LangChain", "LlamaIndex", "RAG systems", "TensorFlow / PyTorch", "NLP & CV"],
  },
  {
    title: "mobile & native",
    items: ["React Native", "iOS / Android", "Bluetooth integration", "Biometric SDKs", "Push notifications"],
  },
];

export interface CareerItem {
  when: string;
  role: string;
  company: string;
  current?: boolean;
  desc: string;
  bullets: string[];
}

export const career: CareerItem[] = [
  {
    when: "Jun 2026 — Present",
    role: "Senior Software Engineer",
    company: "Armia Systems Pvt. Ltd, Infopark Kochi",
    current: true,
    desc: "Designing and engineering scalable enterprise platforms and high-availability cloud architecture. Collaborating with cross-functional teams to build next-generation applications and integrate intelligent features.",
    bullets: [
      "Architecting robust frontend and backend solutions for enterprise scalability",
      "Leading implementation and design of mission-critical software systems",
      "Driving best practices in code quality, modern tooling, and deployment efficiency",
    ],
  },
  {
    when: "Aug 2022 — Jun 2026",
    role: "Software Engineer",
    company: "Bairuhatech LLP",
    desc: "Leading multi-platform application design and delivery while architecting cloud infrastructure on AWS. Working directly with international clients across Dubai and Nairobi, managing full deployment cycles and integrating cutting-edge AI/LLM capabilities into production systems.",
    bullets: [
      "Reduced delivery timelines by 20% through agile methodologies",
      "Delivered onsite implementations in Dubai (UAE) and Nairobi (Kenya)",
      "Architected scalable cloud infrastructure improving uptime and performance",
      "Integrated AI/LLM APIs and vector databases for intelligent solutions",
    ],
  },
  {
    when: "Dec 2019 — Jul 2022",
    role: "Process Associate",
    company: "Tata Consultancy Services",
    desc: "Improved internal business workflows through automation and process optimization in a global delivery environment. Collaborated with cross-functional teams to ensure high-quality project deliverables and developed technical documentation for system enhancements.",
    bullets: [
      "Enhanced operational efficiency through automation tools",
      "Collaborated with global teams for timely client support",
      "Developed comprehensive technical documentation",
    ],
  },
];
