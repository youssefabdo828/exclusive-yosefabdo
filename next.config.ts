import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   reactStrictMode: false,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'ecommerce.routemisr.com',
            pathname: '/**',
         },
      ],
      dangerouslyAllowSVG: true,
   },


   output:"export",
};

export default nextConfig;
