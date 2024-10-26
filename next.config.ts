import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"] // Add Cloudinary's domain here
  }
};

export default nextConfig;
