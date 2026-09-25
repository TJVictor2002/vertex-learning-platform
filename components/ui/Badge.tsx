import { cn } from "@/lib/cn";

type BadgeTone = "video" | "lesson" | "popular" | "neutral";

const tones: Record<BadgeTone, string> = {
  video: "bg-primary-500 text-white",
  lesson: "bg-neutral-900 text-white",
  popular: "bg-primary-200 text-primary-500",
  neutral: "bg-neutral-100 text-neutral-700",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs px-2 py-0.5 text-small font-medium tracking-wide uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
