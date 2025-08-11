import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://promotion.friendli.ai//:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
