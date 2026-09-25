import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "tertiary" | "text";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-md font-sans font-medium transition-colors disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";

const sizes: Record<Size, string> = {
  lg: "h-11 px-4 text-body-lg",
  md: "h-11 px-3 text-body",
};

const variants: Record<Variant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-400",
  secondary:
    "border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-100",
  tertiary: "text-neutral-900 hover:text-primary-500",
  text: "text-primary-500 hover:text-primary-400",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  icon?: "external" | "play" | "none";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "lg", icon = "none", href, className, children, ...props },
    ref,
  ) => {
    const classes = cn(base, sizes[size], variants[variant], className);
    const content = (
      <>
        {children}
        {icon === "external" && <ArrowUpRight className="size-4" />}
        {icon === "play" && <Play className="size-4" />}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
