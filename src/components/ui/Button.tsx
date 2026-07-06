import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  forwardRef,
} from "react";

interface ButtonOwnProps {
  variant?: "primary" | "secondary" | "outline" | "outlineLight" | "ghost" | "gold" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

type ButtonAsButton = ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: undefined;
  };

type ButtonAsAnchor = ButtonOwnProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    /** Abre en pestaña nueva con rel seguro; para URLs fuera del sitio */
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

const variants = {
  primary:
    "bg-navy-600 text-white hover:bg-navy-700 active:bg-navy-800 focus-visible:ring-navy-500 shadow-sm hover:shadow-md",
  secondary:
    "bg-warm-100 text-navy-800 hover:bg-warm-200 active:bg-warm-300 focus-visible:ring-navy-400 border border-warm-300",
  outline:
    "border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white focus-visible:ring-navy-500 bg-transparent",
  outlineLight:
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 focus-visible:ring-gold-400 focus-visible:ring-offset-navy-950 bg-transparent",
  ghost:
    "text-navy-700 hover:bg-warm-100 active:bg-warm-200 focus-visible:ring-navy-400 bg-transparent",
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-600 active:bg-gold-700 focus-visible:ring-gold-400 shadow-gold font-bold",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-sm",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    if (props.href !== undefined) {
      const { href, external, ...anchorProps } =
        props as Omit<ButtonAsAnchor, keyof ButtonOwnProps>;

      const isInternal = href.startsWith("/") && !external;

      if (isInternal) {
        return (
          <Link href={href} className={classes} {...anchorProps}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const buttonProps = props as Omit<ButtonAsButton, keyof ButtonOwnProps>;

    return (
      <button ref={ref} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
