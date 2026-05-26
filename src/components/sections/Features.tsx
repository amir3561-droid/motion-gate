"use client";

import { motion } from "framer-motion";
import { Brain, Video, FileText, Shield, Zap, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "تحلیل هوشمند با AI",
    description: "مدل‌های پیشرفته هوش مصنوعی برای تشخیص دقیق الگوهای حرکتی و بیومکانیک بدن",
    bgImage: "/images/bg-ai-analysis.png",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100/80 backdrop-blur-sm",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "پردازش ویدیو بلادرنگ",
    description: "آپلود ویدیو و دریافت تحلیل کامل در کمتر از ۶۰ ثانیه بدون نیاز به تجهیزات خاص",
    bgImage: "/images/bg-video-processing.png",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100/80 backdrop-blur-sm",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "گزارش حرفه‌ای PDF",
    description: "خروجی استاندارد با نمودارها، متریک‌ها و پیشنهادات اصلاحی قابل دانلود",
    bgImage: "/images/bg-pdf-report.png",
    iconColor: "text-green-600",
    iconBg: "bg-green-100/80 backdrop-blur-sm",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "امنیت و حریم خصوصی",
    description: "رمزنگاری end-to-end داده‌ها و حذف خودکار فایل‌ها پس از پردازش",
    bgImage: "/images/bg-security.png",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100/80 backdrop-blur-sm",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "سرعت و دقت بالا",
    description: "پردازش ابری با دقت ۹۹.۷٪ و پاسخ‌دهی آنی برای تجربه‌ای روان",
    bgImage: "/images/bg-speed-accuracy.png",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100/80 backdrop-blur-sm",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "پشتیبانی تخصصی",
    description: "دسترسی به کارشناسان بیومکانیک برای تفسیر نتایج و مشاوره شخصی‌سازی‌شده",
    bgImage: "/images/bg-support.png",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100/80 backdrop-blur-sm",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* ۱. هدر بخش: عنوان و توضیحات */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-blue-200 text-blue-700 rounded-full text-sm font-bold mb-4 shadow-sm"
          >
            ✨ ویژگی‌های کلیدی
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            چرا موشن گیت؟
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            ترکیبی از فناوری هوش مصنوعی و تخصص بیومکانیک برای ارائه دقیق‌ترین تحلیل‌های حرکتی
          </motion.p>
        </div>

        {/* ۲. تصویر داشبورد: واضح و روشن در وسط */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 max-w-6xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-slate-100 rounded-2xl overflow-hidden">
              <Image
                src="/images/dashboard-preview.png"
                alt="پنل تحلیل بیومکانیک موشن گیت"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* سایه تزئینی زیر عکس */}
          <div className="absolute -bottom-4 left-10 right-10 h-8 bg-blue-500/20 blur-2xl rounded-full -z-10" />
        </motion.div>

        {/* ۳. کارت‌های ویژگی‌ها: در زیر تصویر با پس‌زمینه تصویری */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-soft hover:shadow-2xl transition-all duration-300 h-[320px]"
            >
              {/* تصویر پس‌زمینه */}
              <Image
                src={feature.bgImage}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* لایه پوششی سفید برای خوانایی متن */}
              <div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors duration-300" />

              {/* محتوای کارت */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  {/* آیکون با پس‌زمینه رنگی و افکت شیشه‌ای */}
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 ${feature.iconColor} shadow-sm`}>
                    {feature.icon}
                  </div>
                  
                  {/* عنوان و توضیحات */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
                
                {/* لینک بیشتر */}
                <div className="flex items-center gap-2 text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4">
                  <span>بیشتر بدانید</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
