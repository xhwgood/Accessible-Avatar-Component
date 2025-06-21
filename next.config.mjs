/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Using remotePatterns instead of domains for better security and flexibility
    // remotePatterns is preferred because:
    // 1. More secure: Allows specific protocols, hostnames, ports, and pathnames
    // 2. More flexible: Can restrict to specific paths and protocols
    // 3. Better performance: More granular control over which images are optimized
    // 4. Future-proof: Recommended approach in modern Next.js
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example-bucket.s3.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn.myapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
