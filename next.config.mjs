/** @type {import('next').NextConfig} */
const nextConfig = {
  // بهینه‌سازی تصاویر
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  
  // فشرده‌سازی
  compress: true,
  
  // حذف شناسه‌های توسعه در بیلد تولید
  reactStrictMode: true,
  
  // بهینه‌سازی فونت‌ها
  optimizeFonts: true,
  
  // تنظیمات هدرهای امنیتی
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
