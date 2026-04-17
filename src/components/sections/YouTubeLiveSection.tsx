import { Youtube, ExternalLink, Bell } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { youtubeConfig } from "@/data/config";
import { getYouTubeSectionData, buildYouTubeEmbedUrl } from "@/lib/youtube";

interface YoutubeDict {
  eyebrow: string;
  titleLive: string;
  titleFallback: string;
  subtitleLive: string;
  subtitleFallback: string;
  liveNow: string;
  latestBroadcast: string;
  subscribe: string;
  viewChannel: string;
  shareMessage: string;
}

interface Props {
  dict: YoutubeDict;
}

export default async function YouTubeLiveSection({ dict }: Props) {
  const data = await getYouTubeSectionData(youtubeConfig);

  return (
    <section id="transmision" className="py-20 bg-navy-gradient text-white" aria-label="Transmisión en vivo">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            {data.isLive ? (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-live-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                </span>
                <span className="text-red-300 font-bold text-sm tracking-wide uppercase">{dict.liveNow}</span>
              </div>
            ) : (
              <Badge variant="navy" className="text-navy-200 bg-white/10 border-white/20">{dict.latestBroadcast}</Badge>
            )}
          </div>
          <SectionHeader
            eyebrow={dict.eyebrow}
            title={data.isLive ? dict.titleLive : dict.titleFallback}
            subtitle={data.isLive ? dict.subtitleLive : dict.subtitleFallback}
            light
          />
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-navy border border-white/10 bg-navy-900">
          <div className="aspect-video">
            <iframe
              src={buildYouTubeEmbedUrl(data.videoId)}
              title={data.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-200 text-sm text-center sm:text-left">
            {data.isLive ? dict.shareMessage : `"${data.videoTitle}"`}
          </p>
          <div className="flex items-center gap-3">
            <a href={youtubeConfig.channelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-colors shadow-sm">
              <Bell size={16} />
              {dict.subscribe}
            </a>
            <a href={youtubeConfig.channelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg transition-colors border border-white/20">
              <Youtube size={16} />
              {dict.viewChannel}
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
