import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
        serverActions: {},
    },
    runtime: "nodejs"
};

export default nextConfig;
