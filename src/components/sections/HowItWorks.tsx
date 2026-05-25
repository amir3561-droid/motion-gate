"use client";

import { motion } from "framer-motion";
import { Upload, Play, BarChart3, Download } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-10 h-10" />,
    number: "۰۱",
    title: "آپلود ویدیو",
    description: "ویدیوی حرکت خود را از هر زاویه‌ای آپلود کنید. نیازی به تجهیزات خاص نیست.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500",
    shadowColor: "shadow-blue-500/30",
  },
  {
    icon: <Play className="w-10 h-10" />,
    number: "۰۲",
    title: "پردازش هوشمند",
    description: "هوش مصنوعی ما حرکت شما را فریم‌به‌فریم تحلیل می‌کند.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500",
    shadowColor: "shadow-purple-500/30",
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    number: "۰۳",
    title: "تحلیل بیومکانیک",
    description: "زاویه مفاصل، نیروها و الگوهای حرکتی با دقت ۹۹.۷٪ محاسبه می‌شوند.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500",
    shadowColor: "shadow-green-500/30",
  },
  {
    icon: <Download className="w-10 h-10" />,
    number: "۰۴",
    title: "دریافت گزارش",
    description: "گزارش کامل PDF با نمودارها و پیشنهادات اصلاحی دریافت کنید.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500",
    shadowColor: "shadow-orange-500/30",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* هدر بخش */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-bold mb-4 shadow-sm"
          >
            🎯 نحوه کار
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            فقط ۴ مرحله تا تحلیل کامل
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            بدون نیاز به تجهیزات پیچیده، در کمتر از ۶۰ ثانیه تحلیل حرفه‌ای دریافت کنید
          </motion.p>
        </div>

        {/* مراحل */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* کارت مرحله */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 relative overflow-hidden group">
                {/* شماره مرحله در پس‌زمینه */}
                <div className="absolute top-4 right-4 text-7xl font-bold text-gray-50 opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>
                
                {/* آیکون با گرادینت */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg ${step.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {step.icon}
                </div>
                
                {/* عنوان و توضیحات */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              
              {/* فلش اتصال (به جز آخرین مرحله) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E2E8F0" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
