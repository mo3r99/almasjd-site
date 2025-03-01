/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "almasjid-site.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
