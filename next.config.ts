import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // ⬅️ Increase the Server Action body limit
    },
  },
    images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};

export default nextConfig;
