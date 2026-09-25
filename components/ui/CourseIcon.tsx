import { cn } from "@/lib/cn";

export type CourseIconName = "nextjs" | "docker" | "typescript";

export function CourseIcon({
  name,
  className,
}: {
  name: CourseIconName;
  className?: string;
}) {
  if (name === "nextjs") {
    return (
      <span
        aria-hidden
        className={cn(
          "flex size-[72px] items-center justify-center rounded-md bg-black font-sans text-[44px] font-bold leading-none text-white",
          className,
        )}
      >
        N
      </span>
    );
  }

  if (name === "typescript") {
    return (
      <span
        aria-hidden
        className={cn(
          "flex size-[72px] items-center justify-center rounded-md bg-[#3178c6] font-sans text-[34px] font-bold leading-none text-white",
          className,
        )}
      >
        TS
      </span>
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 76 56"
      className={cn("h-[60px] w-[76px]", className)}
      fill="none"
    >
      <g fill="#2496ed">
        <rect x="18" y="14" width="8" height="8" rx="1" />
        <rect x="27" y="14" width="8" height="8" rx="1" />
        <rect x="36" y="14" width="8" height="8" rx="1" />
        <rect x="27" y="5" width="8" height="8" rx="1" />
        <rect x="9" y="23" width="8" height="8" rx="1" />
        <rect x="18" y="23" width="8" height="8" rx="1" />
        <rect x="27" y="23" width="8" height="8" rx="1" />
        <rect x="36" y="23" width="8" height="8" rx="1" />
        <rect x="45" y="23" width="8" height="8" rx="1" />
        <path d="M2 33h58c4 0 6-3 7-6 4 0 7 2 9 5-2 1-4 2-6 2-3 12-14 21-31 21C17 55 6 47 2 33Z" />
      </g>
      <circle cx="30" cy="42" r="1.6" fill="#fff" />
    </svg>
  );
}
