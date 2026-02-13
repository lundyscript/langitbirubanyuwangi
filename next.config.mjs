/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "0p5uiramebvvyktb.public.blob.vercel-storage.com"
      },
      {
        protocol: "https",
        hostname: "muhammadiyah.or.id"
      }
    ]
  }
};

export default nextConfig;
