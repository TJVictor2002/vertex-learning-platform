import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body text-neutral-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Fragment key={item.label}>
            {index > 0 && <ChevronRight className="size-3.5 text-neutral-300" />}
            {item.href && !isLast ? (
              <Link href={item.href} className="transition-colors hover:text-primary-500">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-neutral-900" : undefined}>{item.label}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
