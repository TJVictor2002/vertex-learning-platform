import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
        <path d="M2 3h5.5L12 13.5 16.5 3H22L13.5 21h-3L2 3Z" fill="var(--color-primary-500)" />
      </svg>
      <span className="font-display text-heading-2 font-bold text-neutral-900">Vertex</span>
    </span>
  );
}
