"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Youtube, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/config";
import type { Locale } from "@/i18n/config";

interface NavDict {
  home: string;
  about: string;
  ministries: string;
  events: string;
  devotionals: string;
  planVisit: string;
  watchLive: string;
  whoWeAre: string;
  ourFaith: string;
  ourPastor: string;
  openMenu: string;
  closeMenu: string;
  switchLang: string;
}

interface Props {
  locale: Locale;
  dict: NavDict;
}

export default function Navbar({ locale, dict }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const otherLocale: Locale = locale === "es" ? "en" : "es";

  const navLinks = [
    { label: dict.home, href: `/${locale}` },
    {
      label: dict.about,
      href: `/${locale}#nosotros`,
      children: [
        { label: dict.whoWeAre, href: `/${locale}#nosotros` },
        { label: dict.ourFaith, href: `/${locale}#nosotros` },
        { label: dict.ourPastor, href: `/${locale}#pastor` },
      ],
    },
    { label: dict.ministries, href: `/${locale}#ministerios` },
    { label: dict.events, href: `/${locale}#eventos` },
    { label: dict.devotionals, href: `/${locale}/devocionales` },
    { label: dict.planVisit, href: `/${locale}/visitar` },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy-900/98 backdrop-blur-md shadow-navy"
          : "bg-gradient-to-b from-navy-950/80 to-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center shadow-gold group-hover:bg-gold-400 transition-colors">
            <span className="text-navy-950 font-serif font-bold text-lg leading-none">A</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-white font-serif font-bold text-base leading-tight">Centro Cristiano</span>
            <span className="block text-gold-400 font-bold text-sm tracking-widest uppercase leading-tight">Adoram</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-gold-300 transition-colors rounded-md hover:bg-white/5">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform", openDropdown === link.label && "rotate-180")}
                  />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-48">
                    <div className="bg-navy-800 rounded-xl shadow-navy border border-white/10 overflow-hidden py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-gold-300 transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right: Live CTA + Lang switcher + Mobile toggle */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <Link
            href={`/${otherLocale}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 text-white/80 hover:text-white hover:bg-white/10 text-xs font-bold tracking-wide transition-all"
            aria-label={`Switch to ${dict.switchLang}`}
          >
            <Globe size={13} />
            {dict.switchLang}
          </Link>

          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all shadow-sm"
            aria-label={dict.watchLive}
          >
            <Youtube size={16} className="shrink-0" />
            <span className="hidden md:inline">{dict.watchLive}</span>
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-white hover:text-gold-300 transition-colors"
            aria-label={mobileOpen ? dict.closeMenu : dict.openMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10 shadow-navy">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-white/90 hover:text-gold-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 border-t border-white/10 space-y-2">
              <Link
                href={`/${otherLocale}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-sm"
              >
                <Globe size={15} />
                {dict.switchLang}
              </Link>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
              >
                <Youtube size={18} />
                {dict.watchLive}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
