"use client";

import { motion } from "framer-motion";
import { Play, ArrowLeft, CheckCircle2, BarChart3, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-surface-blue via-surface-purple to-surface-green">
      {/* المان‌های تزئینی متحرک */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* سمت راست: متن و دکمه‌ها */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-right"
          >
            {/* تگ بالا */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-blue-200 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-sm cursor-default"
            >
              <Activity className="w-4 h-4" />
              <span>تحلیل حرکت با دقت ۹۹.۷٪</span>
            </motion.div>
            
            {/* عنوان اصلی */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.2] mb-6">
              تحلیل بیومکانیکی <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600 animate-pulse">
                حرفه‌ای با هوش مصنوعی
              </span>
            </h1>
            
            {/* توضیحات */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              با آپلود ویدیوی حرکت خود، تحلیل دقیق زاویه مفاصل، نیروها و الگوهای حرکتی را در کمتر از ۶۰ ثانیه دریافت کنید.
            </p>
            
            {/* دکمه‌ها */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-btn font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-glow-blue flex items-center justify-center gap-2 group"
              >
                شروع تحلیل رایگان
                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-btn font-bold hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                مشاهده دمو
              </motion.button>
            </div>
            
            {/* آمار پایین */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-10 mt-14 pt-8 border-t border-gray-200"
            >
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">۱۰K+</div>
                <div className="text-sm text-gray-600 font-medium mt-1">تحلیل انجام‌شده</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-600">۹۹.۷٪</div>
                <div className="text-sm text-gray-600 font-medium mt-1">دقت مدل</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">۲۴/۷</div>
                <div className="text-sm text-gray-600 font-medium mt-1">پشتیبانی</div>
              </div>
            </motion.div>
          </motion.div>

          {/* سمت چپ: تصویر/داشبورد */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* قاب اصلی */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6"
                  >
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </motion.div>
                  <p className="text-gray-600 font-bold text-lg">پیش‌نمایش تحلیل بیومکانیک</p>
                </div>
              </div>
            </motion.div>
            
            {/* کارت شناور ۱ */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 right-8 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">زاویه زانو</div>
                  <div className="text-sm text-gray-500">۱۲۷.۳° - بهینه</div>
                </div>
              </div>
            </motion.div>
            
            {/* کارت شناور ۲ */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 left-8 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">گزارش آماده</div>
                  <div className="text-sm text-gray-500">دانلود PDF</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
