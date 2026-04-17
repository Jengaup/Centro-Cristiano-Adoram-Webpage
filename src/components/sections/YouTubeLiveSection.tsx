import { Youtube, ExternalLink, Bell } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { youtubeConfig } from "@/data/config";
import { getYouTubeSectionData, buildYouTubeEmbedUrl } from "@/lib/youtube";

export default async function YouTubeLiveSection() {
  const data = await getYouTubeSectionData(youtubeConfig);

  return (
    <section
      id="transmision"
      className="py-20 bg-navy-gradient text-white"
      aria-label="Transmisión en vivo"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            {data.isLive ? (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-live-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                </span>
                <span className="text-red-300 font-bold text-sm tracking-wide uppercase">
                  En Vivo Ahora
                </span>
              </div>
            ) : (
              <Badge variant="navy" className="text-navy-200 bg-white/10 border-white/20">
                Última Transmisión
              </Badge>
            )}
          </div>

          <SectionHeader
            eyebrow="Canal Oficial"
            title={data.isLive ? "¡Estamos en Vivo!" : "Últimas Predicaciones"}
            subtitle={
              data.isLive
                ? "Únete ahora a nuestra transmisión en vivo. Conéctate con lo que Dios está haciendo."
                : "Mira nuestro servicio más reciente y mantente conectado con la Palabra de Dios."
            }
            light
          />
        </div>

        {/* Video embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-navy border border-white/10 bg-navy-900">
          <div className="aspect-video">
            <iframe
              src={buildYouTubeEmbedUrl(data.videoId, {
                autoplay: false,
                muted: false,
              })}
              title={data.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Below video */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-200 text-sm text-center sm:text-left">
            {data.isLive
              ? "Comparte esta transmisión con tu familia y amigos"
              : `"${data.videoTitle}"`}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={youtubeConfig.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-colors shadow-sm"
            >
              <Bell size={16} />
              Suscribirse al Canal
            </a>
            <a
              href={youtubeConfig.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg transition-colors border border-white/20"
            >
              <Youtube size={16} />
              Ver Canal
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
