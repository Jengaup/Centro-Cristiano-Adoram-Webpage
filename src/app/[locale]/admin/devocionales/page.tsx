import type { Metadata } from "next";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import DevotionalList from "@/components/admin/DevotionalList";
import RoleGuard from "@/components/admin/RoleGuard";
import { devotionals } from "@/data/devotionals";
import { getMockCurrentUser } from "@/data/users";
import Button from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = { title: "Gestionar Devocionales" };

export default function AdminDevotionalsPage({ params }: { params: { locale: Locale } }) {
  const currentUser = getMockCurrentUser();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy-900">Devocionales</h1>
          <p className="text-slate-500 text-sm mt-1">Gestiona el contenido devocional del sitio</p>
        </div>
        <Link href={`/${params.locale}/admin/devocionales/nuevo`}>
          <Button variant="gold" size="md">
            <PlusCircle size={16} />Nuevo Devocional
          </Button>
        </Link>
      </div>

      <RoleGuard role={currentUser.role} permission="canCreateDevotionals">
        <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-6">
          <DevotionalList devotionals={devotionals} currentUser={currentUser} locale={params.locale} />
        </div>
      </RoleGuard>
    </div>
  );
}
