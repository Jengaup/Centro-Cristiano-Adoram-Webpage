import type { UserRole, RolePermissions } from "@/types/user";

const PERMISSIONS: Record<UserRole, RolePermissions> = {
  super_admin: {
    canCreateDevotionals: true,
    canEditOwnDevotionals: true,
    canEditAllDevotionals: true,
    canPublishDevotionals: true,
    canDeleteDevotionals: true,
    canManageTags: true,
    canFeatureDevotional: true,
    canManageUsers: true,
    canManageSiteSettings: true,
    canConfigureYouTube: true,
    canManageMinistries: true,
    canManageHomepageSections: true,
  },
  editor: {
    canCreateDevotionals: true,
    canEditOwnDevotionals: true,
    canEditAllDevotionals: true,
    canPublishDevotionals: true,
    canDeleteDevotionals: false,
    canManageTags: true,
    canFeatureDevotional: true,
    canManageUsers: false,
    canManageSiteSettings: false,
    canConfigureYouTube: false,
    canManageMinistries: false,
    canManageHomepageSections: false,
  },
  contributor: {
    canCreateDevotionals: true,
    canEditOwnDevotionals: true,
    canEditAllDevotionals: false,
    canPublishDevotionals: false,
    canDeleteDevotionals: false,
    canManageTags: false,
    canFeatureDevotional: false,
    canManageUsers: false,
    canManageSiteSettings: false,
    canConfigureYouTube: false,
    canManageMinistries: false,
    canManageHomepageSections: false,
  },
};

export function getPermissions(role: UserRole): RolePermissions {
  return PERMISSIONS[role];
}

export function can(
  role: UserRole,
  permission: keyof RolePermissions
): boolean {
  return PERMISSIONS[role][permission];
}

export function canEditDevotional(
  actorRole: UserRole,
  actorId: string,
  devotionalAuthorId: string
): boolean {
  if (can(actorRole, "canEditAllDevotionals")) return true;
  if (can(actorRole, "canEditOwnDevotionals") && actorId === devotionalAuthorId)
    return true;
  return false;
}
