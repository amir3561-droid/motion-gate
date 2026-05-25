import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: "#1E293B",    // سرمه‌ای تیره (Slate-800)
          light: "#3B82F6",      // آبی روشن
          dark: "#0F172A",       // خیلی تیره
        },
        secondary: { 
          DEFAULT: "#64748B",
        },
        // رنگ‌های اصلی کارت‌ها
        brand: {
          blue: "#0EA5E9",       // آبی آسمانی
          purple: "#8B5CF6",     // بنفش
          green: "#10B981",      // سبز
          orange: "#F59E0B",     // نارنجی
          pink: "#EC4899",       // صورتی
          cyan: "#06B6D4",       // فیروزه‌ای
        },
        // پس‌زمینه‌های ملایم
        surface: {
          DEFAULT: "#F8FAFC",    // خاکستری خیلی روشن
          blue: "#F0F9FF",       // آبی خیلی روشن
          purple: "#F5F3FF",     // بنفش خیلی روشن
          green: "#F0FDF4",      // سبز خیلی روشن
          orange: "#FFFBEB",     // نارنجی خیلی روشن
          pink: "#FDF2F8",       // صورتی خیلی روشن
        },
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        btn: "9999px",
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'hover': '0 20px 50px rgba(0, 0, 0, 0.12)',
        'glow-blue': '0 0 40px rgba(14, 165, 233, 0.3)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 50%, #F0FDF4 100%)',
        'card-gradient-blue': 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
        'card-gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        'card-gradient-green': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        'card-gradient-orange': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'card-gradient-pink': 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
