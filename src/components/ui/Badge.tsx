import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "navy" | "burgundy" | "success" | "warning" | "draft" | "live";
}

export default function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-warm-200 text-warm-600",
    gold: "bg-gold-100 text-gold-700 border border-gold-300",
    navy: "bg-navy-100 text-navy-700",
    burgundy: "bg-burgundy-100 text-burgundy-600",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    draft: "bg-slate-100 text-slate-600",
    live: "bg-red-500 text-white animate-pulse-slow",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
