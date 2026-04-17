import type {
  YouTubeLiveStatus,
  YouTubeFallback,
  YouTubeChannelConfig,
} from "@/types/youtube";

// ---------------------------------------------------------------------------
// Mock live-status check
// Replace with real YouTube Data API v3 call when API key is available.
// Endpoint: GET https://www.googleapis.com/youtube/v3/search
//   ?part=snippet&channelId={CHANNEL_ID}&type=video&eventType=live&key={API_KEY}
// ---------------------------------------------------------------------------
export async function checkChannelLiveStatus(
  config: YouTubeChannelConfig
): Promise<YouTubeLiveStatus> {
  // MOCK: returns not-live by default
  // In production: call YouTube Data API and parse liveStreamingDetails
  return {
    isLive: false,
    liveVideoId: null,
    liveThumbnailUrl: null,
    liveTitle: null,
    checkedAt: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Mock latest video retrieval
// Replace with real YouTube Data API v3 call.
// Endpoint: GET https://www.googleapis.com/youtube/v3/search
//   ?part=snippet&channelId={CHANNEL_ID}&type=video&order=date&maxResults=1&key={API_KEY}
// ---------------------------------------------------------------------------
export async function getLatestChannelVideo(
  config: YouTubeChannelConfig
): Promise<YouTubeFallback> {
  // MOCK: returns a placeholder video ID
  // In production: parse items[0] from YouTube search API response
  return {
    latestVideoId: "dQw4w9WgXcQ",
    latestVideoTitle: "Servicio Dominical — Centro Cristiano Adoram",
    latestThumbnailUrl: `https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg`,
    latestPublishedAt: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Unified helper used by the homepage YouTube section
// ---------------------------------------------------------------------------
export async function getYouTubeSectionData(config: YouTubeChannelConfig): Promise<{
  isLive: boolean;
  videoId: string;
  videoTitle: string;
  thumbnailUrl: string;
}> {
  const liveStatus = await checkChannelLiveStatus(config);

  if (liveStatus.isLive && liveStatus.liveVideoId) {
    return {
      isLive: true,
      videoId: liveStatus.liveVideoId,
      videoTitle: liveStatus.liveTitle ?? "Transmisión en Vivo",
      thumbnailUrl: liveStatus.liveThumbnailUrl ?? "",
    };
  }

  const fallback = await getLatestChannelVideo(config);
  return {
    isLive: false,
    videoId: fallback.latestVideoId,
    videoTitle: fallback.latestVideoTitle,
    thumbnailUrl: fallback.latestThumbnailUrl,
  };
}

export function buildYouTubeEmbedUrl(
  videoId: string,
  options: { autoplay?: boolean; muted?: boolean } = {}
): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    ...(options.autoplay ? { autoplay: "1" } : {}),
    ...(options.muted ? { mute: "1" } : {}),
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export function buildYouTubeThumbnailUrl(
  videoId: string,
  quality: "default" | "hq" | "maxres" = "hq"
): string {
  const qualityMap = {
    default: "default",
    hq: "hqdefault",
    maxres: "maxresdefault",
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}
