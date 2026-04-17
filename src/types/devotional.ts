export type DevotionalStatus = "draft" | "published" | "scheduled";

export interface DevotionalTag {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

export interface DevotionalCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Devotional {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  scriptureReference: string;
  scriptureText?: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  featuredImage?: string;
  tags: DevotionalTag[];
  categoryId?: string;
  status: DevotionalStatus;
  publishDate: string;
  scheduledDate?: string;
  createdAt: string;
  updatedAt: string;
  isFeatured: boolean;
  readingTimeMinutes?: number;
}

export interface DevotionalFormData {
  title: string;
  excerpt: string;
  content: string;
  scriptureReference: string;
  scriptureText: string;
  authorName: string;
  featuredImage: string;
  tags: string[];
  categoryId: string;
  status: DevotionalStatus;
  scheduledDate: string;
  isFeatured: boolean;
}
