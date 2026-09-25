"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}) {
  const pages = new Set([1, page - 1, page, page + 1, totalPages].filter(
    (p) => p >= 1 && p <= totalPages,
  ));
  const sorted = Array.from(pages).sort((a, b) => a - b);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-1">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange?.(page - 1)}
        className="flex size-9 items-center justify-center rounded-sm text-neutral-500 transition-colors hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-40"
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </button>

      {sorted.map((p, i) => {
        const prev = sorted[i - 1];
        const showEllipsis = prev !== undefined && p - prev > 1;
        return (
          <span key={p} className="flex items-center">
            {showEllipsis && <span className="px-1 text-neutral-400">&hellip;</span>}
            <button
              type="button"
              onClick={() => onPageChange?.(p)}
              className={cn(
                "flex size-9 items-center justify-center rounded-sm text-body font-medium transition-colors",
                p === page
                  ? "bg-primary-500 text-white"
                  : "text-neutral-700 hover:bg-neutral-100",
              )}
              aria-current={p === page ? "page" : undefined}
            >
              {p}
            </button>
          </span>
        );
      })}

      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange?.(page + 1)}
        className="flex size-9 items-center justify-center rounded-sm text-neutral-500 transition-colors hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-40"
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}
