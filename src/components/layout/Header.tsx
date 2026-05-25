"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "ویژگی‌ها", href: "#features" },
  { label: "نحوه کار", href: "#how-it-works" },
  { label: "کاربران", href: "#audience" },
  { label: "قیمت‌گذاری", href: "#pricing" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCorrectLink = (href: string) => {
    if (href === "/" || href === "/about" || href === "/contact") return href;
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg border-gray-200/50 shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">موشن گیت</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getCorrectLink(item.href)}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              ورود
            </Link>
            <Link href="/signup" className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold rounded-btn hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/30">
              شروع رایگان
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="منو"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={getCorrectLink(item.href)}
                  className="py-3 border-b border-gray-100 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-btn font-bold hover:border-blue-400 hover:text-blue-600 transition-colors">
                  ورود
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-btn font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
                  شروع رایگان
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
