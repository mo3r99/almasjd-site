/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    unoptimized: false,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "almasjid-site.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wsrv.nl/",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
