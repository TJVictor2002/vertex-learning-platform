import { BarChart2, Clock, FileText, Layers, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CourseIcon, type CourseIconName } from "@/components/ui/CourseIcon";
import { cn } from "@/lib/cn";

const cardBase = "rounded-md border border-neutral-200 bg-white p-5 shadow-sm";

export function CourseCard({
  initial,
  title,
  description,
  level,
  duration,
  modules,
  className,
  icon,
  href,
}: {
  initial?: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: string;
  className?: string;
  /** Homepage variant: large brand icon, serif title, divided meta row. */
  icon?: CourseIconName;
  href?: string;
}) {
  if (icon) {
    return (
      <div
        className={cn(
          "relative flex flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-7",
          className,
        )}
      >
        <CourseIcon name={icon} />
        <h3 className="mt-6 font-display text-heading-2 text-neutral-900">
          {href ? (
            <Link href={href} className="after:absolute after:inset-0 after:content-['']">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="mt-4 mb-8 text-body text-neutral-500">{description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-neutral-200 pt-5 text-small text-neutral-500">
          <span className="inline-flex items-center gap-1.5">
            <BarChart2 className="size-3.5" /> {level}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" /> {duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FileText className="size-3.5" /> {modules}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(cardBase, "flex flex-col gap-4", className)}>
      <div className="flex size-10 items-center justify-center rounded-sm bg-neutral-900 font-display text-heading-3 text-white">
        {initial}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-sans text-heading-3 font-semibold text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
      </div>
      <div className="flex items-center gap-4 text-small text-neutral-500">
        <span className="inline-flex items-center gap-1">
          <BarChart2 className="size-3.5" /> {level}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" /> {duration}
        </span>
        <span className="inline-flex items-center gap-1">
          <Layers className="size-3.5" /> {modules}
        </span>
      </div>
    </div>
  );
}

export function LessonCard({
  type,
  title,
  description,
  meta,
  action,
  className,
}: {
  type: "video" | "lesson";
  title: string;
  description: string;
  meta: string;
  action: string;
  className?: string;
}) {
  return (
    <div className={cn(cardBase, "flex flex-col gap-3", className)}>
      <Badge tone={type} className="w-fit">
        {type}
      </Badge>
      <div className="flex flex-col gap-1">
        <h3 className="font-sans text-heading-3 font-semibold text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
      </div>
      <div className="flex items-center justify-between text-small text-neutral-500">
        <span>{meta}</span>
        <span className="inline-flex items-center gap-1 font-medium text-primary-500">
          {type === "video" && <PlayCircle className="size-3.5" />}
          {action}
        </span>
      </div>
    </div>
  );
}

export function ResourceCard({
  title,
  description,
  fileType,
  fileSize,
  className,
}: {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  className?: string;
}) {
  return (
    <div className={cn(cardBase, "flex flex-col gap-3", className)}>
      <FileText className="size-6 text-neutral-500" />
      <div className="flex flex-col gap-1">
        <h3 className="font-sans text-heading-3 font-semibold text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
      </div>
      <span className="text-small text-neutral-500">
        {fileType} &middot; {fileSize}
      </span>
    </div>
  );
}
