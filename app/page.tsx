import Link from "next/link";
import { ArrowRight, Search, Star } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/ui/Card";
import { homeCourses } from "@/lib/home-courses";

const bars = [
  { left: "0%", w: "9%", h: 90 },
  { left: "9%", w: "8%", h: 130 },
  { left: "17%", w: "7%", h: 170 },
  { left: "24%", w: "6%", h: 215 },
  { left: "30%", w: "14%", h: 110 },
  { left: "44%", w: "8%", h: 80 },
  { left: "56%", w: "9%", h: 100 },
  { left: "65%", w: "7%", h: 150 },
  { left: "72%", w: "9%", h: 185 },
  { left: "81%", w: "8%", h: 90 },
  { left: "89%", w: "11%", h: 165 },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-[#f6f1ec]">
      <div className="relative flex w-full max-w-[1440px] flex-col overflow-hidden border-x border-neutral-200/70 bg-[#fbf8f5]">
        <Navbar variant="home" />

        <main className="flex flex-1 flex-col">
          <section className="flex flex-col items-center border-b border-neutral-200/70 px-6 pt-16 pb-16 text-center md:pt-[68px]">
            <span className="rounded-sm border border-neutral-200 bg-white/60 px-4 py-2.5 text-small font-medium tracking-[0.2em] text-primary-500 uppercase">
              Intelligent learning
            </span>
            <h1 className="mt-10 max-w-3xl font-display text-[40px] leading-[1.1] font-medium text-neutral-900 sm:text-5xl md:text-[64px]">
              Search your learning in plain English.
            </h1>
            <p className="mt-8 max-w-md text-body-lg text-neutral-500 md:text-[19px] md:leading-8">
              Vertex understands what you want to learn and finds the exact lessons across all
              your courses.
            </p>
            <Button
              href="/courses"
              className="mt-10 h-[60px] gap-3 rounded-sm px-6 text-[19px] shadow-md"
            >
              Explore Courses
              <ArrowRight className="size-6" />
            </Button>

            <div className="mt-10 flex h-[86px] w-full max-w-[746px] items-center gap-4 rounded-md border border-neutral-200 bg-white px-5 shadow-sm md:px-6">
              <Search className="size-7 shrink-0 text-neutral-700" aria-hidden />
              <input
                type="text"
                readOnly
                aria-label="Search your learning"
                placeholder="Ask anything about your learning…"
                className="min-w-0 flex-1 bg-transparent text-body-lg text-neutral-900 outline-none placeholder:text-neutral-500 md:text-xl"
              />
              <span className="hidden rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-3 text-body-lg text-neutral-700 sm:block">
                ⌘ K
              </span>
            </div>
          </section>

          <section className="px-6 pt-16 md:px-[52px]">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-heading-1 text-neutral-900 md:text-[28px]">
                All Courses
              </h2>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-body font-medium text-primary-500 transition-colors hover:text-primary-400"
              >
                View all courses
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {homeCourses.map((course) => (
                <CourseCard
                  key={course.slug}
                  icon={course.icon}
                  href={`/courses/${course.slug}`}
                  title={course.title}
                  description={course.summary}
                  level={course.level}
                  duration={course.duration}
                  modules={course.modules}
                />
              ))}
            </div>

            <div className="mt-14 flex items-center gap-6">
              <span className="h-px flex-1 bg-neutral-200" aria-hidden />
              <p className="inline-flex items-center gap-3 text-center text-body-lg text-neutral-700">
                <Star className="size-6 shrink-0 text-primary-500" aria-hidden />
                New courses and lessons added every week.
              </p>
              <span className="h-px flex-1 bg-neutral-200" aria-hidden />
            </div>
          </section>

          <div className="relative mt-auto h-[240px] shrink-0" aria-hidden>
            {bars.map((bar) => (
              <span
                key={bar.left}
                className="absolute bottom-0 bg-gradient-to-t from-primary-300/70 to-primary-200/0"
                style={{ left: bar.left, width: bar.w, height: bar.h }}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
