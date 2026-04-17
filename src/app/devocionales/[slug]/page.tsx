import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Tag, Share2, Heart } from "lucide-react";
import Badge from "@/components/ui/Badge";
import {
  getDevotionalBySlug,
  getPublishedDevotionals,
} from "@/data/devotionals";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const devotionals = getPublishedDevotionals();
  return devotionals.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const devotional = getDevotionalBySlug(params.slug);
  if (!devotional) return { title: "Devocional no encontrado" };
  return {
    title: devotional.title,
    description: devotional.excerpt,
  };
}

export default function DevotionalPage({ params }: Props) {
  const devotional = getDevotionalBySlug(params.slug);
  if (!devotional || devotional.status !== "published") notFound();

  const related = getPublishedDevotionals()
    .filter((d) => d.id !== devotional.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Back nav */}
      <div className="bg-white border-b border-warm-200 sticky top-[72px] z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            href="/devocionales"
            className="flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 font-semibold transition-colors"
          >
            <ArrowLeft size={14} />
            Todos los devocionales
          </Link>
          <div className="flex items-center gap-2">
            {devotional.readingTimeMinutes && (
              <span className="flex items-center gap-1 text-xs text-warm-500">
                <Clock size={12} />
                {devotional.readingTimeMinutes} min de lectura
              </span>
            )}
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10 pb-8 border-b border-warm-200">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {devotional.tags.map((tag) => (
              <Badge key={tag.id} variant="gold">
                <Tag size={10} />
                {tag.name}
              </Badge>
            ))}
          </div>

          {/* Scripture reference */}
          <p className="text-gold-600 text-sm font-bold tracking-wide uppercase flex items-center gap-2 mb-4">
            <BookOpen size={14} />
            {devotional.scriptureReference}
          </p>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
            {devotional.title}
          </h1>

          {/* Scripture block */}
          {devotional.scriptureText && (
            <blockquote className="border-l-4 border-gold-500 pl-5 py-3 bg-gold-50 rounded-r-xl mb-6">
              <p className="font-serif text-lg text-navy-700 italic leading-relaxed">
                "{devotional.scriptureText}"
              </p>
              <footer className="mt-2 text-gold-700 font-bold text-xs tracking-widest uppercase">
                — {devotional.scriptureReference}
              </footer>
            </blockquote>
          )}

          {/* Author meta */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-100 to-warm-200 flex items-center justify-center border-2 border-warm-200">
                <span className="font-bold text-navy-700">
                  {devotional.authorName.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-bold text-navy-800 text-sm">
                  {devotional.authorName}
                </p>
                <p className="text-warm-500 text-xs">
                  {formatDate(devotional.publishDate)}
                </p>
              </div>
            </div>
            <button
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-warm-300 text-slate-600 hover:border-gold-400 hover:text-gold-600 text-sm font-semibold transition-colors"
              aria-label="Compartir devocional"
            >
              <Share2 size={14} />
              Compartir
            </button>
          </div>
        </header>

        {/* Content */}
        <div
          className="devotional-content"
          dangerouslySetInnerHTML={{ __html: devotional.content }}
        />

        {/* Footer CTA */}
        <footer className="mt-16 pt-10 border-t border-warm-200">
          <div className="bg-navy-gradient rounded-2xl p-8 text-center text-white">
            <Heart
              size={28}
              className="mx-auto mb-3 text-gold-400 fill-gold-400/30"
            />
            <h3 className="font-serif text-xl font-bold mb-2">
              ¿Este devocional tocó tu corazón?
            </h3>
            <p className="text-navy-200 text-sm mb-5">
              Compártelo con alguien que lo necesite, o cuéntanos cómo Dios habló a tu corazón.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#oracion"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-lg text-sm transition-colors"
              >
                Enviar petición de oración
              </Link>
              <Link
                href="/devocionales"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-sm border border-white/20 transition-colors"
              >
                Leer más devocionales
              </Link>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">
                También te puede interesar
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((d) => (
                  <Link
                    key={d.id}
                    href={`/devocionales/${d.slug}`}
                    className="group block bg-white rounded-xl border border-warm-200 hover:border-gold-300 p-5 hover:shadow-warm transition-all duration-200"
                  >
                    <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                      {d.scriptureReference}
                    </p>
                    <h4 className="font-serif font-bold text-navy-800 group-hover:text-navy-600 text-sm leading-snug line-clamp-2">
                      {d.title}
                    </h4>
                    <p className="text-xs text-warm-500 mt-2">{d.authorName}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </footer>
      </article>
    </div>
  );
}
