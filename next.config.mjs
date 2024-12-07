const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.10minuteschool.com",
      },
      {
        protocol: "https",
        hostname: "cdn.10ms.com",
      },
    ],
  },
};

export default nextConfig;
