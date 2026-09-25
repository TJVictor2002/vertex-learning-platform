import { CheckCircle2, Loader2, Lock, PlayCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Status = "in-progress" | "completed" | "now-playing" | "locked";

const config: Record<Status, { icon: LucideIcon; label: string; className: string; spin?: boolean }> = {
  "in-progress": {
    icon: Loader2,
    label: "In Progress",
    className: "text-primary-500",
    spin: true,
  },
  completed: {
    icon: CheckCircle2,
    label: "Completed",
    className: "text-green-600",
  },
  "now-playing": {
    icon: PlayCircle,
    label: "Now Playing",
    className: "text-primary-500",
  },
  locked: {
    icon: Lock,
    label: "Locked",
    className: "text-neutral-500",
  },
};

export function StatusIndicator({
  status,
  className,
}: {
  status: Status;
  className?: string;
}) {
  const { icon: Icon, label, className: toneClassName, spin } = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-body text-neutral-700",
        className,
      )}
    >
      <Icon className={cn("size-4", toneClassName, spin && "animate-spin")} />
      {label}
    </span>
  );
}
