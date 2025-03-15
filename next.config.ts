import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Dangerously allow production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // Add any other Next.js config options here, for example:
  // reactStrictMode: true,
};

export default nextConfig;
