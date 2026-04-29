import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, BookOpen, Users, Settings, Youtube, LogOut, Shield } from "lucide-react";
import { getMockCurrentUser } from "@/data/users";
import { ROLE_LABELS } from "@/types/user";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: {
    default: "Panel de Administración | Adoram",
    template: "%s | Admin Adoram",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const currentUser = getMockCurrentUser();
  const locale = params.locale;

  const navItems = [
    { label: "Panel", href: `/${locale}/admin`, icon: LayoutDashboard },
    { label: "Devocionales", href: `/${locale}/admin/devocionales`, icon: BookOpen },
    { label: "Usuarios", href: `/${locale}/admin/usuarios`, icon: Users },
    { label: "YouTube", href: `/${locale}/admin/youtube`, icon: Youtube },
    { label: "Ajustes", href: `/${locale}/admin/ajustes`, icon: Settings },
  ];

  return (
    <div className="font-sans bg-slate-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-navy-950 text-white min-h-screen flex-col hidden lg:flex">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
              <span className="text-navy-950 font-serif font-bold">A</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Admin Adoram</p>
              <p className="text-navy-400 text-xs">Panel de Gestión</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
              <span className="text-gold-400 font-bold text-sm">{currentUser.name.charAt(0)}</span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{currentUser.name}</p>
              <div className="flex items-center gap-1">
                <Shield size={10} className="text-gold-400 shrink-0" />
                <p className="text-gold-400 text-xs font-semibold">{ROLE_LABELS[currentUser.role]}</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-navy-200 hover:text-white hover:bg-white/8 transition-colors"
              >
                <Icon size={17} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-navy-300 hover:text-white hover:bg-white/8 transition-colors"
          >
            <LogOut size={16} />
            Volver al sitio
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden bg-navy-950 text-white px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gold-500 flex items-center justify-center">
              <span className="text-navy-950 font-serif font-bold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-sm">Admin</span>
          </div>
          <Link href={`/${locale}`} className="text-navy-300 hover:text-white text-sm">
            ← Sitio
          </Link>
        </header>

        <main className="flex-1 p-6 lg:p-8 max-w-7xl w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
