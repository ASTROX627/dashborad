import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["192.168.100.33"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.classbon.com",
      },
      {
        protocol: "https",
        hostname: "minio-classbon.darkube.app",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },

  transpilePackages: ["msw"],
};

export default nextConfig;
