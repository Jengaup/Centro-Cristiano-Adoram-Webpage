import type { User } from "@/types/user";

export const mockUsers: User[] = [
  {
    id: "user-001",
    name: "Admin Principal",
    email: "admin@adoram.iglesia",
    role: "super_admin",
    bio: "Administrador del sistema",
    createdAt: "2024-01-01T00:00:00Z",
    isActive: true,
  },
  {
    id: "user-002",
    name: "María González",
    email: "maria@adoram.iglesia",
    role: "editor",
    bio: "Editora de contenido devocional",
    createdAt: "2024-02-15T00:00:00Z",
    isActive: true,
  },
  {
    id: "user-003",
    name: "Carlos Mendoza",
    email: "carlos@adoram.iglesia",
    role: "contributor",
    bio: "Colaborador devocional y líder de grupos pequeños",
    createdAt: "2024-03-10T00:00:00Z",
    isActive: true,
  },
  {
    id: "user-004",
    name: "Ana Ramírez",
    email: "ana@adoram.iglesia",
    role: "contributor",
    bio: "Colaboradora del ministerio de mujeres",
    createdAt: "2024-04-01T00:00:00Z",
    isActive: true,
  },
];

export const getUserById = (id: string): User | undefined =>
  mockUsers.find((u) => u.id === id);

// In production, replace with actual auth context
export const getMockCurrentUser = (): User => mockUsers[0];
