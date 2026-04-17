import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  Youtube,
  PlusCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { getMockCurrentUser } from "@/data/users";
import { devotionals } from "@/data/devotionals";
import { ROLE_LABELS } from "@/types/user";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Panel de Control" };

export default function AdminDashboard() {
  const currentUser = getMockCurrentUser();
  const published = devotionals.filter((d) => d.status === "published").length;
  const drafts = devotionals.filter((d) => d.status === "draft").length;
  const scheduled = devotionals.filter((d) => d.status === "scheduled").length;
  const featured = devotionals.filter((d) => d.isFeatured).length;

  const stats = [
    {
      label: "Publicados",
      value: published,
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
    },
    {
      label: "Borradores",
      value: drafts,
      icon: FileText,
      color: "text-slate-500",
      bg: "bg-slate-50 border-slate-200",
    },
    {
      label: "Programados",
      value: scheduled,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
    },
    {
      label: "Destacados",
      value: featured,
      icon: Star,
      color: "text-gold-600",
      bg: "bg-gold-50 border-gold-200",
    },
  ];

  const recentDevotionals = [...devotionals]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 5);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-2xl font-bold text-navy-900">
          ¡Bienvenido, {currentUser.name.split(" ")[0]}!
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Rol:{" "}
          <span className="font-semibold text-navy-700">
            {ROLE_LABELS[currentUser.role]}
          </span>{" "}
          · Panel de gestión de contenido de Centro Cristiano Adoram
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`rounded-2xl border p-5 ${stat.bg} flex items-center gap-4`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-white border flex items-center justify-center shrink-0 ${stat.bg}`}
              >
                <Icon size={20} className={stat.color} />
              </div>
              <div>
                <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
                <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent devotionals */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-card p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-navy-800 flex items-center gap-2">
              <BookOpen size={17} className="text-navy-600" />
              Actividad Reciente
            </h2>
            <Link
              href="/admin/devocionales"
              className="text-sm text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-1 transition-colors"
            >
              Ver todos <ArrowRight size={13} />
            </Link>
          </div>

          <div className="space-y-3">
            {recentDevotionals.map((d) => (
              <div
                key={d.id}
                className="flex items-center justify-between py-3 border-b border-warm-100 last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy-800 text-sm truncate">
                    {d.title}
                  </p>
                  <p className="text-xs text-warm-500">
                    {d.authorName} ·{" "}
                    {formatDate(d.updatedAt, {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
                <Badge
                  variant={
                    d.status === "published"
                      ? "success"
                      : d.status === "draft"
                      ? "draft"
                      : "warning"
                  }
                  className="ml-3 shrink-0"
                >
                  {d.status === "published"
                    ? "Publicado"
                    : d.status === "draft"
                    ? "Borrador"
                    : "Programado"}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-6">
            <h2 className="font-bold text-navy-800 mb-4">Acciones rápidas</h2>
            <div className="space-y-2">
              <Link
                href="/admin/devocionales/nuevo"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gold-50 border border-gold-200 text-gold-700 font-semibold text-sm hover:bg-gold-100 transition-colors"
              >
                <PlusCircle size={16} />
                Nuevo Devocional
              </Link>
              <Link
                href="/admin/devocionales"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-warm-50 border border-warm-200 text-navy-700 font-semibold text-sm hover:bg-warm-100 transition-colors"
              >
                <BookOpen size={16} />
                Gestionar Devocionales
              </Link>
              {currentUser.role !== "contributor" && (
                <Link
                  href="/admin/usuarios"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-warm-50 border border-warm-200 text-navy-700 font-semibold text-sm hover:bg-warm-100 transition-colors"
                >
                  <Users size={16} />
                  Gestionar Usuarios
                </Link>
              )}
              {currentUser.role === "super_admin" && (
                <Link
                  href="/admin/youtube"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-warm-50 border border-warm-200 text-navy-700 font-semibold text-sm hover:bg-warm-100 transition-colors"
                >
                  <Youtube size={16} />
                  Configurar YouTube
                </Link>
              )}
            </div>
          </div>

          <div className="bg-navy-gradient rounded-2xl p-5 text-white text-center">
            <p className="font-serif text-base font-bold mb-1">
              "La fe sin obras está muerta"
            </p>
            <p className="text-navy-200 text-xs">Santiago 2:17</p>
          </div>
        </div>
      </div>
    </div>
  );
}
