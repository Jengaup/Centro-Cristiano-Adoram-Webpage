"use client";

import type { UserRole, RolePermissions } from "@/types/user";
import { can } from "@/lib/permissions";
import { ShieldAlert } from "lucide-react";

interface RoleGuardProps {
  role: UserRole;
  permission: keyof RolePermissions;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function RoleGuard({
  role,
  permission,
  children,
  fallback,
}: RoleGuardProps) {
  if (!can(role, permission)) {
    if (fallback) return <>{fallback}</>;
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center text-slate-400">
        <ShieldAlert size={40} className="mb-3 opacity-40" />
        <p className="font-semibold text-slate-600">Acceso restringido</p>
        <p className="text-sm mt-1">
          No tienes permiso para ver esta sección.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
