"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Edit2,
  Eye,
  Trash2,
  Star,
  Clock,
  FileText,
  CheckCircle2,
  Filter,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Devotional, DevotionalStatus } from "@/types/devotional";
import type { User } from "@/types/user";
import { canEditDevotional, can } from "@/lib/permissions";
import { formatDate } from "@/lib/utils";

interface DevotionalListProps {
  devotionals: Devotional[];
  currentUser: User;
}

const STATUS_CONFIG: Record<
  DevotionalStatus,
  { label: string; badge: "success" | "draft" | "warning"; icon: React.ElementType }
> = {
  published: { label: "Publicado", badge: "success", icon: CheckCircle2 },
  draft: { label: "Borrador", badge: "draft", icon: FileText },
  scheduled: { label: "Programado", badge: "warning", icon: Clock },
};

export default function DevotionalList({
  devotionals,
  currentUser,
}: DevotionalListProps) {
  const [filter, setFilter] = useState<DevotionalStatus | "all">("all");

  const filtered = devotionals.filter((d) =>
    filter === "all" ? true : d.status === filter
  );

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 border-b border-warm-200 pb-4">
        {(["all", "published", "draft", "scheduled"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
              filter === f
                ? "bg-navy-600 text-white"
                : "text-slate-500 hover:text-navy-700 hover:bg-warm-100"
            }`}
          >
            {f === "all"
              ? "Todos"
              : f === "published"
              ? "Publicados"
              : f === "draft"
              ? "Borradores"
              : "Programados"}
          </button>
        ))}
        <span className="ml-auto text-xs text-warm-500 self-center">
          {filtered.length} devocional{filtered.length !== 1 ? "es" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-warm-200">
        <table className="w-full text-sm">
          <thead className="bg-warm-50 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-navy-700 text-xs uppercase tracking-wide">
                Título
              </th>
              <th className="px-4 py-3 font-semibold text-navy-700 text-xs uppercase tracking-wide hidden md:table-cell">
                Autor
              </th>
              <th className="px-4 py-3 font-semibold text-navy-700 text-xs uppercase tracking-wide">
                Estado
              </th>
              <th className="px-4 py-3 font-semibold text-navy-700 text-xs uppercase tracking-wide hidden sm:table-cell">
                Fecha
              </th>
              <th className="px-4 py-3 font-semibold text-navy-700 text-xs uppercase tracking-wide text-right">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-100">
            {filtered.map((devotional) => {
              const status = STATUS_CONFIG[devotional.status];
              const StatusIcon = status.icon;
              const canEdit = canEditDevotional(
                currentUser.role,
                currentUser.id,
                devotional.authorId
              );
              const canDelete = can(currentUser.role, "canDeleteDevotionals");
              const canFeature = can(currentUser.role, "canFeatureDevotional");

              return (
                <tr key={devotional.id} className="hover:bg-warm-50 transition-colors">
                  <td className="px-4 py-4 max-w-xs">
                    <div className="flex items-start gap-2">
                      {devotional.isFeatured && (
                        <Star
                          size={14}
                          className="text-gold-500 fill-gold-400 mt-0.5 shrink-0"
                        />
                      )}
                      <div>
                        <p className="font-semibold text-navy-800 line-clamp-1">
                          {devotional.title}
                        </p>
                        {devotional.scriptureReference && (
                          <p className="text-xs text-warm-500 mt-0.5">
                            {devotional.scriptureReference}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <p className="text-slate-600">{devotional.authorName}</p>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={status.badge} className="flex items-center gap-1 w-fit">
                      <StatusIcon size={10} />
                      {status.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 hidden sm:table-cell text-slate-500">
                    {formatDate(devotional.publishDate, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/devocionales/${devotional.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg text-warm-500 hover:text-navy-600 hover:bg-warm-100 transition-colors"
                        title="Ver devocional"
                      >
                        <Eye size={15} />
                      </Link>
                      {canEdit && (
                        <Link
                          href={`/admin/devocionales/${devotional.id}`}
                          className="p-1.5 rounded-lg text-warm-500 hover:text-navy-600 hover:bg-warm-100 transition-colors"
                          title="Editar"
                        >
                          <Edit2 size={15} />
                        </Link>
                      )}
                      {canDelete && (
                        <button
                          className="p-1.5 rounded-lg text-warm-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Eliminar"
                          onClick={() =>
                            alert(
                              "Funcionalidad de eliminación requiere integración con backend."
                            )
                          }
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          <Filter size={32} className="mx-auto mb-2 opacity-30" />
          <p className="text-sm">No hay devocionales en esta categoría.</p>
        </div>
      )}
    </div>
  );
}
