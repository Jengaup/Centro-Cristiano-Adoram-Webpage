export interface YouTubeChannelConfig {
  channelId: string;
  channelHandle: string;
  channelUrl: string;
  apiKey?: string;
}

export interface YouTubeVideo {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  isLive: boolean;
  viewCount?: number;
  duration?: string;
}

export interface YouTubeLiveStatus {
  isLive: boolean;
  liveVideoId: string | null;
  liveThumbnailUrl: string | null;
  liveTitle: string | null;
  checkedAt: string;
}

export interface YouTubeFallback {
  latestVideoId: string;
  latestVideoTitle: string;
  latestThumbnailUrl: string;
  latestPublishedAt: string;
}
