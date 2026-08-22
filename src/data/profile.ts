// ---------------------------------------------------------------------
// Single source of truth for identity, contact details and social links.
// Edit here and every part of the site (header, hero, footer, contact,
// page metadata) updates.
// ---------------------------------------------------------------------

export const profile = {
  name: "Jis Sunny",
  role: "Senior Software Engineer",
  location: "Kochi, Kerala, India",
  experience: "7 years · AI, Web, Mobile, Cloud",
  availability: "Open to opportunities",

  // Hero paragraph.
  intro:
    "I build scalable web, mobile and cloud systems — from ERP platforms and marketplaces to AI-assisted internal tooling. Six years turning business problems into software that ships.",

  email: "jis.sunny@gmail.com",
  github: "https://github.com/jis-sunnyy",
  githubHandle: "@jis-sunnyy",
  linkedin: "https://www.linkedin.com/in/jis-sunny-28241815a/",
  linkedinHandle: "in/jis-sunny",

  // File lives in /public. `resumeFileName` is what the browser saves it as.
  resumeUrl: "/Jis_Software_Engineer_CV.pdf",
  resumeFileName: "Jis_Sunny_Resume.pdf",
} as const;

export const mailto = `mailto:${profile.email}`;
