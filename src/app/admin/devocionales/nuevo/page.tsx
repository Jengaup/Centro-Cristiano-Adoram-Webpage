import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DevotionalEditor from "@/components/admin/DevotionalEditor";
import RoleGuard from "@/components/admin/RoleGuard";
import { getMockCurrentUser } from "@/data/users";

export const metadata: Metadata = { title: "Nuevo Devocional" };

export default function NewDevotionalPage() {
  const currentUser = getMockCurrentUser();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/devocionales"
          className="flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 font-semibold transition-colors"
        >
          <ArrowLeft size={14} />
          Devocionales
        </Link>
        <span className="text-warm-400">/</span>
        <h1 className="font-serif text-xl font-bold text-navy-900">
          Nuevo Devocional
        </h1>
      </div>

      <RoleGuard role={currentUser.role} permission="canCreateDevotionals">
        <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-6 lg:p-8">
          <DevotionalEditor currentUser={currentUser} />
        </div>
      </RoleGuard>
    </div>
  );
}
