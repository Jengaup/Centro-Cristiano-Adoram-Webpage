export type UserRole = "super_admin" | "editor" | "contributor";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt: string;
  isActive: boolean;
}

export interface RolePermissions {
  canCreateDevotionals: boolean;
  canEditOwnDevotionals: boolean;
  canEditAllDevotionals: boolean;
  canPublishDevotionals: boolean;
  canDeleteDevotionals: boolean;
  canManageTags: boolean;
  canFeatureDevotional: boolean;
  canManageUsers: boolean;
  canManageSiteSettings: boolean;
  canConfigureYouTube: boolean;
  canManageMinistries: boolean;
  canManageHomepageSections: boolean;
}

export const ROLE_LABELS: Record<UserRole, string> = {
  super_admin: "Super Administrador",
  editor: "Editor",
  contributor: "Colaborador",
};
