import { Play, Clock, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { getRecentSermons } from "@/data/sermons";
import { formatDate } from "@/lib/utils";
import { youtubeConfig } from "@/data/config";

export default function SermonsSection() {
  const sermons = getRecentSermons(4);
  const [featured, ...rest] = sermons;

  return (
    <section
      id="predicaciones"
      className="py-24 bg-warm-50"
      aria-label="Predicaciones recientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Predicaciones"
            title="La Palabra que transforma"
            subtitle="Escucha, aprende y crece en tu fe con nuestras enseñanzas."
            centered={false}
          />
          <a
            href={youtubeConfig.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 hover:text-gold-700 font-semibold text-sm flex items-center gap-1 transition-colors shrink-0"
          >
            Ver todas <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured sermon */}
          {featured && (
            <a
              href={`https://www.youtube.com/watch?v=${featured.youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-3 group block rounded-2xl overflow-hidden shadow-card border border-warm-200 hover:border-gold-300 hover:shadow-gold transition-all duration-300 bg-white"
              aria-label={`Ver predicación: ${featured.title}`}
            >
              <div className="relative aspect-video bg-navy-900">
                <Image
                  src={featured.thumbnailUrl}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/25 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play size={24} className="text-white ml-1 fill-white" />
                  </div>
                </div>
                {featured.series && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="navy" className="bg-navy-800/80 text-white backdrop-blur-sm">
                      {featured.series}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-gold-600 text-xs font-bold tracking-wide uppercase mb-2">
                  {formatDate(featured.date)} · {featured.preacher}
                </p>
                <h3 className="font-serif text-2xl font-bold text-navy-900 group-hover:text-navy-700 transition-colors mb-2">
                  {featured.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-warm-500">
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} />
                    {featured.scriptureReference}
                  </span>
                  {featured.durationMinutes && (
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {featured.durationMinutes} min
                    </span>
                  )}
                </div>
              </div>
            </a>
          )}

          {/* Rest of sermons */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((sermon) => (
              <a
                key={sermon.id}
                href={`https://www.youtube.com/watch?v=${sermon.youtubeVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-xl overflow-hidden border border-warm-200 hover:border-gold-300 hover:shadow-warm transition-all duration-200 bg-white p-4"
              >
                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-navy-900">
                  <Image
                    src={sermon.thumbnailUrl}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="96px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-950/30">
                    <Play size={14} className="text-white fill-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gold-600 font-semibold mb-1">
                    {formatDate(sermon.date, { day: "numeric", month: "short" })}
                  </p>
                  <h4 className="font-serif font-bold text-navy-900 text-sm leading-snug group-hover:text-navy-700 transition-colors line-clamp-2">
                    {sermon.title}
                  </h4>
                  <p className="text-xs text-warm-500 mt-1">{sermon.preacher}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
