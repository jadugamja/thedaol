import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
