// Placeholder catalog for the homepage until courses are fetched from Sanity.
// Shape mirrors the course fields in AGENTS.md section 8.
export interface HomeCourse {
  slug: string;
  icon: "nextjs" | "docker" | "typescript";
  title: string;
  summary: string;
  level: string;
  duration: string;
  modules: string;
}

export const homeCourses: HomeCourse[] = [
  {
    slug: "nextjs-for-production",
    icon: "nextjs",
    title: "Next.js for Production",
    summary: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
  },
  {
    slug: "docker-essentials",
    icon: "docker",
    title: "Docker Essentials",
    summary: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
  },
  {
    slug: "typescript-deep-dive",
    icon: "typescript",
    title: "TypeScript Deep Dive",
    summary: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
  },
];
