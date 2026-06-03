/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.gvkedutech.com",
          },
        ],
        destination: "https://gvkedutech.com/:path*",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      // Existing Domains
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "gvkedutech.com",
      },

      // University Logo Domains
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "static.cdnlogo.com",
      },

      // Additional University Domains
      {
        protocol: "https",
        hostname: "*.edu",
      },
      {
        protocol: "https",
        hostname: "*.ac.uk",
      },
      {
        protocol: "https",
        hostname: "*.edu.au",
      },
      {
        protocol: "https",
        hostname: "*.ca",
      },
    ],

    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 60,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production",
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;