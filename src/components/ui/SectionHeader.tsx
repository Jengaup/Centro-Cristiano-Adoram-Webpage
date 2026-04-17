import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-bold tracking-widest uppercase mb-3",
            light ? "text-gold-300" : "text-gold-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-navy-100" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-1 w-16 rounded-full",
          centered && "mx-auto",
          light ? "bg-gold-400" : "bg-gold-500"
        )}
      />
    </div>
  );
}
