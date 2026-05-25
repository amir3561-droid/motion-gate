import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motiongate.ir"),
  title: {
    default: "موشن گیت | تحلیل حرکت با هوش مصنوعی",
    template: "%s | موشن گیت",
  },
  description: "پلتفرم تخصصی تحلیل‌های بیومکانیکی ورزشی و درمانی با هوش مصنوعی. تحلیل ویدیو، گزارش PDF، پشتیبانی ۲۴/۷",
  keywords: ["بیومکانیک", "هوش مصنوعی", "تحلیل حرکت", "ورزش", "فیزیوتراپی", "ویدیو آنالیز"],
  authors: [{ name: "موشن گیت", url: "https://motiongate.ir" }],
  creator: "موشن گیت",
  publisher: "موشن گیت",
  formatDetection: { email: false, address: false, telephone: false },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://motiongate.ir",
    title: "موشن گیت | تحلیل حرکت با هوش مصنوعی",
    description: "پلتفرم تخصصی تحلیل‌های بیومکانیکی ورزشی و درمانی با هوش مصنوعی",
    siteName: "موشن گیت",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "موشن گیت" }],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "موشن گیت | تحلیل حرکت با هوش مصنوعی",
    description: "پلتفرم تخصصی تحلیل‌های بیومکانیکی ورزشی و درمانی با هوش مصنوعی",
    images: ["/og-image.jpg"],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} font-sans bg-white text-slate-900 antialiased selection:bg-blue-500 selection:text-white`}>
        {children}
        
        {/* Structured Data برای سئو */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "موشن گیت",
              url: "https://motiongate.ir",
              logo: "https://motiongate.ir/logo.png",
              description: "پلتفرم تخصصی تحلیل‌های بیومکانیکی ورزشی و درمانی با هوش مصنوعی",
              sameAs: [
                "https://instagram.com/motiongate",
                "https://linkedin.com/company/motiongate",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+98-21-00000000",
                contactType: "customer service",
                areaServed: "IR",
                availableLanguage: "Persian",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
