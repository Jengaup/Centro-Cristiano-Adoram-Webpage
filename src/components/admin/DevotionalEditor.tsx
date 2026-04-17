"use client";

import { useState } from "react";
import { Save, Eye, Calendar, Tag, BookOpen, Image as ImageIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Devotional, DevotionalFormData } from "@/types/devotional";
import type { User } from "@/types/user";
import { devotionalCategories, devotionalTags } from "@/data/devotionals";
import { can } from "@/lib/permissions";

interface DevotionalEditorProps {
  devotional?: Devotional;
  currentUser: User;
  onSave?: (data: DevotionalFormData) => void;
}

const emptyForm: DevotionalFormData = {
  title: "",
  excerpt: "",
  content: "",
  scriptureReference: "",
  scriptureText: "",
  authorName: "",
  featuredImage: "",
  tags: [],
  categoryId: "",
  status: "draft",
  scheduledDate: "",
  isFeatured: false,
};

export default function DevotionalEditor({
  devotional,
  currentUser,
  onSave,
}: DevotionalEditorProps) {
  const [form, setForm] = useState<DevotionalFormData>(() => {
    if (!devotional) return { ...emptyForm, authorName: currentUser.name };
    return {
      title: devotional.title,
      excerpt: devotional.excerpt,
      content: devotional.content,
      scriptureReference: devotional.scriptureReference,
      scriptureText: devotional.scriptureText ?? "",
      authorName: devotional.authorName,
      featuredImage: devotional.featuredImage ?? "",
      tags: devotional.tags.map((t) => t.id),
      categoryId: devotional.categoryId ?? "",
      status: devotional.status,
      scheduledDate: devotional.scheduledDate ?? "",
      isFeatured: devotional.isFeatured,
    };
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const canPublish = can(currentUser.role, "canPublishDevotionals");
  const canFeature = can(currentUser.role, "canFeatureDevotional");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const toggleTag = (tagId: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tagId)
        ? prev.tags.filter((t) => t !== tagId)
        : [...prev.tags, tagId],
    }));
  };

  const handleSubmit = async (status: DevotionalFormData["status"]) => {
    setSaving(true);
    const payload: DevotionalFormData = { ...form, status };
    await new Promise((res) => setTimeout(res, 800));
    onSave?.(payload);
    setSaved(true);
    setSaving(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main editor — 2/3 width */}
      <div className="lg:col-span-2 space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1.5">
            Título *
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="El título de tu devocional..."
            className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 outline-none text-base font-serif font-bold text-navy-900 bg-warm-50 focus:bg-white transition-colors"
          />
        </div>

        {/* Scripture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-navy-700 mb-1.5">
              <BookOpen size={14} />
              Referencia bíblica *
            </label>
            <input
              type="text"
              name="scriptureReference"
              value={form.scriptureReference}
              onChange={handleChange}
              placeholder="Ej. Juan 3:16"
              className="w-full px-3 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-700 mb-1.5">
              Texto bíblico
            </label>
            <input
              type="text"
              name="scriptureText"
              value={form.scriptureText}
              onChange={handleChange}
              placeholder="El versículo completo..."
              className="w-full px-3 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1.5">
            Extracto / Resumen *
          </label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            rows={3}
            placeholder="Un resumen breve que aparece en las vistas previas..."
            className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-warm-50 focus:bg-white transition-colors resize-none"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1.5">
            Contenido completo *
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={16}
            placeholder="Escribe aquí tu devocional completo. Puedes usar HTML básico para formatear el texto."
            className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 outline-none text-sm font-mono bg-warm-50 focus:bg-white transition-colors resize-y"
          />
          <p className="text-xs text-warm-500 mt-1.5">
            Tip: Puedes usar etiquetas HTML básicas: &lt;p&gt;, &lt;h3&gt;, &lt;blockquote&gt;, &lt;ul&gt;, &lt;strong&gt;, &lt;em&gt;
          </p>
        </div>
      </div>

      {/* Sidebar — 1/3 width */}
      <div className="space-y-5">
        {/* Publish panel */}
        <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
          <h3 className="font-bold text-navy-800 text-sm mb-4">Publicación</h3>

          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-xs font-semibold text-navy-600 mb-1">
                Nombre del autor
              </label>
              <input
                type="text"
                name="authorName"
                value={form.authorName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-warm-300 focus:border-navy-400 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
              />
            </div>

            {canPublish && (
              <div>
                <label className="block text-xs font-semibold text-navy-600 mb-1">
                  Estado
                </label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-warm-300 focus:border-navy-400 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
                >
                  <option value="draft">Borrador</option>
                  <option value="published">Publicado</option>
                  <option value="scheduled">Programado</option>
                </select>
              </div>
            )}

            {form.status === "scheduled" && (
              <div>
                <label className="flex items-center gap-1 text-xs font-semibold text-navy-600 mb-1">
                  <Calendar size={12} />
                  Fecha de publicación
                </label>
                <input
                  type="datetime-local"
                  name="scheduledDate"
                  value={form.scheduledDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-warm-300 focus:border-navy-400 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
                />
              </div>
            )}

            {canFeature && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={form.isFeatured}
                  onChange={handleChange}
                  className="accent-gold-600"
                />
                <span className="text-sm text-navy-700 font-semibold">
                  Destacar en la página principal
                </span>
              </label>
            )}
          </div>

          <div className="space-y-2">
            {saved && (
              <p className="text-center text-emerald-600 text-xs font-semibold">
                ✓ Guardado correctamente
              </p>
            )}
            <Button
              variant="gold"
              fullWidth
              disabled={saving}
              onClick={() => handleSubmit(canPublish ? form.status : "draft")}
            >
              <Save size={15} />
              {saving ? "Guardando..." : canPublish ? "Guardar" : "Guardar borrador"}
            </Button>
            {canPublish && form.status !== "published" && (
              <Button
                variant="primary"
                fullWidth
                onClick={() => handleSubmit("published")}
                disabled={saving}
              >
                <Eye size={15} />
                Publicar ahora
              </Button>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
          <h3 className="font-bold text-navy-800 text-sm mb-3">Categoría</h3>
          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-warm-300 focus:border-navy-400 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
          >
            <option value="">Sin categoría</option>
            {devotionalCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
          <h3 className="flex items-center gap-1.5 font-bold text-navy-800 text-sm mb-3">
            <Tag size={14} />
            Etiquetas
          </h3>
          <div className="flex flex-wrap gap-2">
            {devotionalTags.map((tag) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => toggleTag(tag.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                  form.tags.includes(tag.id)
                    ? "bg-navy-600 text-white border-navy-600"
                    : "bg-warm-50 text-slate-600 border-warm-300 hover:border-navy-300"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured image */}
        <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
          <h3 className="flex items-center gap-1.5 font-bold text-navy-800 text-sm mb-3">
            <ImageIcon size={14} />
            Imagen destacada
          </h3>
          <input
            type="url"
            name="featuredImage"
            value={form.featuredImage}
            onChange={handleChange}
            placeholder="https://url-de-la-imagen.jpg"
            className="w-full px-3 py-2 rounded-lg border border-warm-300 focus:border-navy-400 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
          />
          <p className="text-xs text-warm-500 mt-1.5">
            Ingresa la URL de la imagen (soporte de carga de archivos próximamente).
          </p>
        </div>
      </div>
    </div>
  );
}
