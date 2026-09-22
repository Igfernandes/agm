import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "192.168.1.5/**",
      },
      {
        hostname: "0.0.0.0/**",
      },
      {
        hostname: "www.instagram.com"
      },
      {
        hostname: "agm.companymarket.com.br/**",
      },      {
        hostname: "matrilhas.companymarket.com.br/**",
      },
    ],
  },
};

export default nextConfig;
