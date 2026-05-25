"use client";

import { motion } from "framer-motion";
import { Brain, Video, FileText, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-10 h-10" />,
    title: "تحلیل هوشمند با AI",
    description: "مدل‌های پیشرفته هوش مصنوعی برای تشخیص دقیق الگوهای حرکتی و بیومکانیک بدن",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500",
    lightBg: "bg-blue-50",
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: "پردازش ویدیو بلادرنگ",
    description: "آپلود ویدیو و دریافت تحلیل کامل در کمتر از ۶۰ ثانیه بدون نیاز به تجهیزات خاص",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500",
    lightBg: "bg-purple-50",
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: "گزارش حرفه‌ای PDF",
    description: "خروجی استاندارد با نمودارها، متریک‌ها و پیشنهادات اصلاحی قابل دانلود",
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-500",
    lightBg: "bg-green-50",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "امنیت و حریم خصوصی",
    description: "رمزنگاری end-to-end داده‌ها و حذف خودکار فایل‌ها پس از پردازش",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500",
    lightBg: "bg-orange-50",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "سرعت و دقت بالا",
    description: "پردازش ابری با دقت ۹۹.۷٪ و پاسخ‌دهی آنی برای تجربه‌ای روان",
    gradient: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500",
    lightBg: "bg-pink-50",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "پشتیبانی تخصصی",
    description: "دسترسی به کارشناسان بیومکانیک برای تفسیر نتایج و مشاوره شخصی‌سازی‌شده",
    gradient: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500",
    lightBg: "bg-cyan-50",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* هدر بخش */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-bold mb-4 shadow-sm"
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

        {/* گرید کارت‌ها */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
            >
              {/* گرادینت پس‌زمینه برای hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* آیکون با پس‌زمینه رنگی */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* عنوان و توضیحات */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* لینک بیشتر */}
              <div className="flex items-center gap-2 text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span>بیشتر بدانید</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
