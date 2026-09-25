import { InputHTMLAttributes, SelectHTMLAttributes, forwardRef } from "react";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const fieldBase =
  "h-11 w-full rounded-sm border border-neutral-200 bg-white px-4 font-sans text-body text-neutral-900 outline-none placeholder:text-neutral-500 focus:border-primary-400 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-500";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  shortcut?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, shortcut, ...props }, ref) => (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
      <input
        ref={ref}
        type="text"
        className={cn(fieldBase, "pl-10", shortcut && "pr-14", className)}
        {...props}
      />
      {shortcut && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-xs border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-small text-neutral-500">
          {shortcut}
        </span>
      )}
    </div>
  ),
);
SearchInput.displayName = "SearchInput";

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} type="text" className={cn(fieldBase, className)} {...props} />
  ),
);
TextInput.displayName = "TextInput";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative w-full">
    <select
      ref={ref}
      className={cn(fieldBase, "appearance-none pr-10", className)}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
  </div>
));
Select.displayName = "Select";
