import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/my-learning", label: "My Learning" },
];

export function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white px-6">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-body font-medium text-neutral-700 transition-colors hover:text-primary-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
