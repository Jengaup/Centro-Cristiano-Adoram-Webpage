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
        <div className={cn("flex items-center gap-2 mb-3", centered && "justify-center")}>
          <span className={cn("w-1.5 h-1.5 rotate-45 shrink-0", light ? "bg-gold-400" : "bg-gold-500")} />
          <p className={cn("text-xs font-black tracking-[0.25em] uppercase", light ? "text-gold-300" : "text-gold-600")}>
            {eyebrow}
          </p>
          <span className={cn("w-1.5 h-1.5 rotate-45 shrink-0", light ? "bg-gold-400" : "bg-gold-500")} />
        </div>
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
            light ? "text-navy-100" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className={cn("mt-5 flex items-center gap-2", centered && "justify-center")}>
        <div className={cn("h-px w-10", light ? "bg-gold-400/50" : "bg-gold-400/60")} />
        <div className={cn("w-1.5 h-1.5 rotate-45 shrink-0", light ? "bg-gold-400" : "bg-gold-500")} />
        <div className={cn("h-px w-10", light ? "bg-gold-400/50" : "bg-gold-400/60")} />
      </div>
    </div>
  );
}
