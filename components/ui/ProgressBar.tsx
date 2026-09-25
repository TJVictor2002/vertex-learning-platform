import { cn } from "@/lib/cn";

export function ProgressBar({
  value,
  showLabel = true,
  className,
}: {
  value: number;
  showLabel?: boolean;
  className?: string;
}) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("flex w-full items-center gap-3", className)}>
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 w-full flex-1 overflow-hidden rounded-full bg-neutral-200"
      >
        <div
          className="h-full rounded-full bg-primary-500 transition-[width]"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="shrink-0 text-small text-neutral-500">{clamped}% complete</span>
      )}
    </div>
  );
}
