// ---------------------------------------------------------------------
// Skills table shown in the About section.
// Add, remove or reorder rows freely — they render in array order.
// ---------------------------------------------------------------------

export interface ToolkitRow {
  area: string;
  items: string;
}

export const toolkitData: ToolkitRow[] = [
  {
    area: "Frontend",
    items: "React · Next.js · React Native · TypeScript · Redux · Tailwind CSS",
  },
  {
    area: "Backend",
    items: "NestJS · Node.js · Express · Python · FastAPI · GraphQL · REST",
  },
  {
    area: "Data",
    items:
      "PostgreSQL · MongoDB · MySQL · SQLite · Oracle · TypeORM · Sequelize",
  },
  {
    area: "Cloud & Ops",
    items:
      "AWS · Azure · Scaleway · GitHub Actions · GitLab CI · Nginx · Linux",
  },
  {
    area: "Mobile",
    items: "React Native · iOS & Android · Bluetooth · Barcode · NFC",
  },
  {
    area: "AI-assisted",
    items: "Claude Code · Cursor · Antigravity · LLM integration",
  },
];
