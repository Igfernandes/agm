import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "192.168.1.4/**",
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
