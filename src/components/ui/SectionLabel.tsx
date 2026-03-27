import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[4px] border border-black/10 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#3d3d3d]",
        className
      )}
    >
      {children}
    </span>
  );
}
