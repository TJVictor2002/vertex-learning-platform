import Link from "next/link";
import { Bell, User } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/my-learning", label: "My Learning" },
];

export function Navbar({ variant = "default" }: { variant?: "default" | "home" }) {
  const home = variant === "home";
  const navLinks = links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="font-sans text-body font-medium text-neutral-700 transition-colors hover:text-primary-500"
    >
      {link.label}
    </Link>
  ));

  return (
    <header
      className={cn(
        "flex h-16 w-full items-center border-b border-neutral-200 px-6",
        home ? "justify-between gap-4 bg-transparent md:h-24 md:px-10" : "justify-between bg-white",
      )}
    >
      {home ? (
        <>
          <div className="flex items-center gap-6 md:gap-12">
            <Link href="/">
              <Logo />
            </Link>
            <nav className="flex items-center gap-4 md:gap-8">{navLinks}</nav>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              aria-label="Notifications"
              className="text-neutral-700 transition-colors hover:text-primary-500"
            >
              <Bell className="size-5" />
            </button>
            <span
              role="img"
              aria-label="Your profile"
              className="flex size-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-500 md:size-[52px]"
            >
              <User className="size-5" />
            </span>
          </div>
        </>
      ) : (
        <>
          <Link href="/">
            <Logo />
          </Link>
          <nav className="flex items-center gap-6">{navLinks}</nav>
        </>
      )}
    </header>
  );
}
