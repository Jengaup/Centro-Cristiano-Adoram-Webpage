/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Set BASE_PATH env var when deploying to a GitHub Pages project repo
  // e.g. BASE_PATH=/centro-cristiano-adoram-webpage
  basePath: process.env.BASE_PATH ?? "",
  assetPrefix: process.env.BASE_PATH ?? "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
