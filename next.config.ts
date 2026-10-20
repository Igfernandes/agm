import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "192.168.1.5/**",
      },
      {
        hostname: "www.instagram.com",
      },
      {
        hostname: "agm.companymarket.com.br/**",
      },
      {
        hostname: "matrilhas.companymarket.com.br/**",
      },
    ],
  },
};

export default nextConfig;
