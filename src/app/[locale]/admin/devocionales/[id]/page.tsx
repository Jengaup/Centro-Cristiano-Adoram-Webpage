import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import DevotionalEditor from "@/components/admin/DevotionalEditor";
import RoleGuard from "@/components/admin/RoleGuard";
import { devotionals } from "@/data/devotionals";
import { getMockCurrentUser } from "@/data/users";
import { canEditDevotional } from "@/lib/permissions";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

interface Props {
  params: { locale: Locale; id: string };
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    devotionals.map((d) => ({ locale, id: d.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const devotional = devotionals.find((d) => d.id === params.id);
  return { title: devotional ? `Editar: ${devotional.title}` : "Editar Devocional" };
}

export default function EditDevotionalPage({ params }: Props) {
  const devotional = devotionals.find((d) => d.id === params.id);
  if (!devotional) notFound();

  const currentUser = getMockCurrentUser();
  const hasEditPermission = canEditDevotional(currentUser.role, currentUser.id, devotional.authorId);

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link
          href={`/${params.locale}/admin/devocionales`}
          className="flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 font-semibold transition-colors"
        >
          <ArrowLeft size={14} />Devocionales
        </Link>
        <span className="text-warm-400">/</span>
        <h1 className="font-serif text-xl font-bold text-navy-900 truncate">{devotional.title}</h1>
      </div>

      <RoleGuard
        role={currentUser.role}
        permission="canEditOwnDevotionals"
        fallback={
          <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-8 text-center text-slate-400">
            No tienes permiso para editar este devocional.
          </div>
        }
      >
        {hasEditPermission ? (
          <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-6 lg:p-8">
            <DevotionalEditor devotional={devotional} currentUser={currentUser} />
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-8 text-center text-slate-400">
            No tienes permiso para editar el devocional de otro colaborador.
          </div>
        )}
      </RoleGuard>
    </div>
  );
}
