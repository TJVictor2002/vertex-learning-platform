import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  Eye,
  Grid3x3,
  Target,
  Accessibility,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SearchInput, Select, TextInput } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CourseCard, LessonCard, ResourceCard } from "@/components/ui/Card";
import { Navbar } from "@/components/ui/Navbar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pagination } from "@/components/ui/Pagination";
import { Logo } from "@/components/ui/Logo";

const primaryColors = [
  { name: "Primary 500", value: "#F97316", className: "bg-primary-500" },
  { name: "Primary 400", value: "#FB923C", className: "bg-primary-400" },
  { name: "Primary 300", value: "#FDBA74", className: "bg-primary-300" },
  { name: "Primary 200", value: "#FED7AA", className: "bg-primary-200" },
  { name: "Primary 100", value: "#FFEEE5", className: "bg-primary-100" },
];

const neutralColors = [
  { name: "Neutral 900", value: "#0F172A", className: "bg-neutral-900" },
  { name: "Neutral 700", value: "#33415A", className: "bg-neutral-700" },
  { name: "Neutral 500", value: "#64748B", className: "bg-neutral-500" },
  { name: "Neutral 300", value: "#CBD5E1", className: "bg-neutral-300" },
  { name: "Neutral 200", value: "#E2E8F0", className: "bg-neutral-200" },
  { name: "Neutral 100", value: "#F1F5F9", className: "bg-neutral-100" },
  { name: "Neutral 50", value: "#FAFAFC", className: "bg-neutral-50 border border-neutral-200" },
  { name: "White", value: "#FFFFFF", className: "bg-white border border-neutral-200" },
];

const typeScale = [
  { style: "Display 1", font: "Playfair Display", size: "48 / 56", weight: "Bold", use: "Page titles" },
  { style: "Display 2", font: "Playfair Display", size: "36 / 44", weight: "Bold", use: "Section titles" },
  { style: "Heading 1", font: "Inter", size: "28 / 36", weight: "Semi Bold", use: "Card titles" },
  { style: "Heading 2", font: "Inter", size: "22 / 30", weight: "Semi Bold", use: "Sub section" },
  { style: "Heading 3", font: "Inter", size: "18 / 26", weight: "Medium", use: "Small titles" },
  { style: "Body Large", font: "Inter", size: "16 / 24", weight: "Regular", use: "Body copy" },
  { style: "Body", font: "Inter", size: "14 / 20", weight: "Regular", use: "Supporting text" },
  { style: "Small", font: "Inter", size: "12 / 16", weight: "Regular", use: "Captions, meta" },
];

const spacing = [
  { px: 4, rem: "0.25rem" },
  { px: 8, rem: "0.5rem" },
  { px: 12, rem: "0.75rem" },
  { px: 16, rem: "1rem" },
  { px: 24, rem: "1.5rem" },
  { px: 32, rem: "2rem" },
  { px: 40, rem: "2.5rem" },
  { px: 48, rem: "3rem" },
  { px: 64, rem: "4rem" },
];

const radii = [
  { name: "4px (xs)", className: "rounded-xs" },
  { name: "8px (sm)", className: "rounded-sm" },
  { name: "12px (md)", className: "rounded-md" },
  { name: "16px (lg)", className: "rounded-lg" },
  { name: "24px (xl)", className: "rounded-xl" },
  { name: "Full (circle)", className: "rounded-full" },
];

const shadows = [
  { name: "Sm", rgba: "rgba(15, 23, 42, 0.05)", className: "shadow-sm" },
  { name: "Md", rgba: "rgba(15, 23, 42, 0.08)", className: "shadow-md" },
  { name: "Lg", rgba: "rgba(15, 23, 42, 0.1)", className: "shadow-lg" },
  { name: "Xl", rgba: "rgba(15, 23, 42, 0.12)", className: "shadow-xl" },
];

const principles = [
  { icon: Eye, title: "Clarity First", description: "Every element should communicate clearly." },
  {
    icon: Grid3x3,
    title: "Consistency",
    description: "Use components and patterns consistently across the platform.",
  },
  {
    icon: Target,
    title: "Focus & Calm",
    description: "Remove noise and help learners focus on what matters.",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    description: "Design with accessibility and inclusivity in mind.",
  },
];

export default function DesignSystemPage() {
  return (
    <div className="flex flex-1 flex-col bg-neutral-50">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <Logo />
          <h1 className="font-display text-display-1 font-bold text-neutral-900">
            Design System
          </h1>
          <p className="max-w-xl text-body-lg text-neutral-500">
            A unified design language for the Vertex learning platform. Clean, modern and
            focused on clarity, consistency and intuitive learning experiences.
          </p>
          <span className="text-small font-medium tracking-wide text-neutral-500 uppercase">
            Version 1.0
          </span>
        </div>

        {/* 01 Colors */}
        <Section number="01" title="Colors">
          <div className="flex flex-col gap-4">
            <h3 className="text-body font-semibold text-neutral-700">Primary</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {primaryColors.map((color) => (
                <div key={color.name} className="flex flex-col gap-2">
                  <div className={`h-16 w-full rounded-sm ${color.className}`} />
                  <span className="text-body font-medium text-neutral-900">{color.name}</span>
                  <span className="text-small text-neutral-500">{color.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-body font-semibold text-neutral-700">Neutral</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {neutralColors.map((color) => (
                <div key={color.name} className="flex flex-col gap-2">
                  <div className={`h-16 w-full rounded-sm ${color.className}`} />
                  <span className="text-body font-medium text-neutral-900">{color.name}</span>
                  <span className="text-small text-neutral-500">{color.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 02 Typography */}
          <Section number="02" title="Typography">
            <div className="flex flex-col gap-2">
              <span className="font-display text-display-2 font-bold text-neutral-900">Ag</span>
              <span className="text-body-lg font-semibold text-neutral-900">Playfair Display</span>
              <span className="text-small text-neutral-500">Elegant &middot; Readable &middot; Timeless</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-display-2 font-bold text-neutral-900">Ag</span>
              <span className="text-body-lg font-semibold text-neutral-900">Inter</span>
              <span className="text-small text-neutral-500">Clean &middot; Modern &middot; Highly legible</span>
            </div>
          </Section>

          {/* 03 Type Scale */}
          <Section number="03" title="Type Scale">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-body">
                <thead>
                  <tr className="text-small text-neutral-500">
                    <th className="pb-2 pr-2 font-medium">Style</th>
                    <th className="pb-2 pr-2 font-medium">Size / LH</th>
                    <th className="pb-2 pr-2 font-medium">Weight</th>
                    <th className="pb-2 font-medium">Use</th>
                  </tr>
                </thead>
                <tbody>
                  {typeScale.map((row) => (
                    <tr key={row.style} className="border-t border-neutral-100">
                      <td className="py-2 pr-2 font-semibold text-neutral-900">{row.style}</td>
                      <td className="py-2 pr-2 text-neutral-500">{row.size}</td>
                      <td className="py-2 pr-2 text-neutral-500">{row.weight}</td>
                      <td className="py-2 text-neutral-500">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 04 Spacing */}
          <Section number="04" title="Spacing System">
            <p className="text-small text-neutral-500">Base unit: 4px</p>
            <div className="flex flex-wrap items-end gap-3">
              {spacing.map((s) => (
                <div key={s.px} className="flex flex-col items-center gap-1.5">
                  <div
                    className="rounded-xs bg-primary-200"
                    style={{ width: s.px, height: s.px }}
                  />
                  <span className="text-small text-neutral-500">{s.px}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* 05 Radius & Shadows */}
          <Section number="05" title="Radius &amp; Shadows">
            <div className="flex flex-col gap-3">
              <h3 className="text-body font-semibold text-neutral-700">Radius</h3>
              <div className="flex flex-wrap gap-4">
                {radii.map((r) => (
                  <div key={r.name} className="flex flex-col items-center gap-2">
                    <div className={`size-12 border border-neutral-200 bg-neutral-100 ${r.className}`} />
                    <span className="text-small text-neutral-500">{r.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-body font-semibold text-neutral-700">Shadows</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {shadows.map((s) => (
                  <div
                    key={s.name}
                    className={`flex h-16 flex-col justify-center rounded-sm bg-white px-3 ${s.className}`}
                  >
                    <span className="text-body font-semibold text-neutral-900">{s.name}</span>
                    <span className="text-small text-neutral-500">{s.rgba}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* 06 Icons */}
        <Section number="06" title="Icons">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-body font-semibold text-neutral-700">Outline Style</h3>
              <div className="flex flex-wrap gap-4 text-neutral-900">
                <Bell className="size-6" strokeWidth={2} />
                <Search className="size-6" strokeWidth={2} />
                <Play className="size-6" strokeWidth={2} />
                <FileText className="size-6" strokeWidth={2} />
                <Bookmark className="size-6" strokeWidth={2} />
                <BarChart2 className="size-6" strokeWidth={2} />
                <Clock className="size-6" strokeWidth={2} />
                <User className="size-6" strokeWidth={2} />
                <ChevronRight className="size-6" strokeWidth={2} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-body font-semibold text-neutral-700">Filled Style</h3>
              <div className="flex flex-wrap gap-4 text-neutral-900">
                <Bell className="size-6" fill="currentColor" />
                <Search className="size-6" fill="currentColor" />
                <Play className="size-6" fill="currentColor" />
                <FileText className="size-6" fill="currentColor" />
                <Bookmark className="size-6" fill="currentColor" />
                <BarChart2 className="size-6" fill="currentColor" />
                <Clock className="size-6" fill="currentColor" />
                <User className="size-6" fill="currentColor" />
                <ChevronRight className="size-6" fill="currentColor" />
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-1 text-small text-neutral-500">
            <li>24&times;24px grid</li>
            <li>2px stroke width (outline)</li>
            <li>Rounded line caps</li>
            <li>Consistent optical balance</li>
          </ul>
        </Section>

        {/* 07 Buttons */}
        <Section number="07" title="Buttons">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-small text-neutral-500">
                  <th className="pb-3 pr-4 font-medium">Primary</th>
                  <th className="pb-3 pr-4 font-medium">Secondary</th>
                  <th className="pb-3 pr-4 font-medium">Tertiary</th>
                  <th className="pb-3 font-medium">Text</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4">
                    <Button variant="primary">Get Started</Button>
                  </td>
                  <td className="py-2 pr-4">
                    <Button variant="secondary">Explore Courses</Button>
                  </td>
                  <td className="py-2 pr-4">
                    <Button variant="tertiary" icon="external">
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-2">
                    <Button variant="text" icon="play">
                      Watch Video
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <Button variant="primary" disabled>
                      Get Started
                    </Button>
                  </td>
                  <td className="py-2 pr-4">
                    <Button variant="secondary" disabled>
                      Explore Courses
                    </Button>
                  </td>
                  <td className="py-2 pr-4">
                    <Button variant="tertiary" icon="external" disabled>
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-2">
                    <Button variant="text" icon="play" disabled>
                      Watch Video
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="flex flex-col gap-1 text-small text-neutral-500">
            <li>Height: 44px (default)</li>
            <li>Padding: 0 16px (lg), 0 12px (md)</li>
            <li>Radius: 12px</li>
            <li>Font: Inter Medium (14&ndash;16px)</li>
          </ul>
        </Section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 08 Inputs */}
          <Section number="08" title="Inputs">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-small font-medium text-neutral-700">Search / Text Input</span>
                <SearchInput placeholder="Search anything..." shortcut="⌘K" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-small font-medium text-neutral-700">Select</span>
                <Select defaultValue="Most Relevant">
                  <option>Most Relevant</option>
                  <option>Newest</option>
                  <option>Popular</option>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-small font-medium text-neutral-700">Text field</span>
                <TextInput placeholder="Your name" />
              </div>
            </div>
            <ul className="flex flex-col gap-1 text-small text-neutral-500">
              <li>Height: 44px</li>
              <li>Radius: 12px</li>
              <li>Border: 1px solid #E2E8F0</li>
              <li>Padding: 0 16px</li>
              <li>Focus: Border color #FB923C</li>
            </ul>
          </Section>

          {/* 09 + 10 + 11 stacked */}
          <div className="flex flex-col gap-6">
            <Section number="09" title="Badges / Tags">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="video">Video</Badge>
                <Badge tone="lesson">Lesson</Badge>
                <Badge tone="popular">Popular</Badge>
              </div>
            </Section>

            <Section number="10" title="Status / Indicators">
              <div className="flex flex-wrap items-center gap-5">
                <StatusIndicator status="in-progress" />
                <StatusIndicator status="completed" />
                <StatusIndicator status="now-playing" />
                <StatusIndicator status="locked" />
              </div>
            </Section>

            <Section number="11" title="Progress Bar">
              <ProgressBar value={35} />
            </Section>
          </div>
        </div>

        {/* 12 Cards */}
        <Section number="12" title="Cards">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CourseCard
              initial="N"
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modules="12 modules"
            />
            <LessonCard
              type="video"
              title="Data Fetching in Server Components"
              description="Learn how to fetch data on the server using async/await and Next.js best practices."
              meta="Lesson 5.1 &middot; 12:45"
              action="Watch from 12:45"
            />
            <LessonCard
              type="lesson"
              title="Data Fetching &amp; Caching"
              description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
              meta="Module 5"
              action="View lesson"
            />
            <ResourceCard
              title="Caching and Revalidation Guide"
              description="Deep dive into Next.js caching strategies."
              fileType="PDF"
              fileSize="1.2 MB"
            />
          </div>
        </Section>

        {/* 13 Navigation */}
        <Section number="13" title="Navigation">
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-sm border border-neutral-200">
              <Navbar />
            </div>
            <Breadcrumbs
              items={[
                { label: "All Courses", href: "/courses" },
                { label: "Next.js for Production", href: "/courses/nextjs" },
                { label: "Data Fetching & Caching" },
              ]}
            />
            <Pagination page={1} totalPages={8} />
          </div>
        </Section>

        {/* 14 Principles */}
        <Section number="14" title="Principles">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="flex flex-col gap-2">
                <p.icon className="size-5 text-neutral-500" strokeWidth={2} />
                <h3 className="text-body font-semibold text-neutral-900">{p.title}</h3>
                <p className="text-small text-neutral-500">{p.description}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
