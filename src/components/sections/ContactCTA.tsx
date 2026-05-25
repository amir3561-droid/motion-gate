"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* المان‌های تزئینی */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* سمت راست: متن */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              آماده شروع تحلیل حرفه‌ای هستید؟
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              همین امروز به جمع هزاران ورزشکار و متخصص بپیوندید. 
              تحلیل اول شما رایگان است!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-btn font-bold hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2 group">
                شروع رایگان
                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-btn font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                تماس با کارشناس
              </button>
            </div>
            
            {/* اطلاعات تماس سریع */}
            <div className="flex items-center gap-6 text-sm">
              <a href="mailto:info@motiongate.ir" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@motiongate.ir
              </a>
            </div>
          </motion.div>

          {/* سمت چپ: فرم سریع */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              درخواست دمو رایگان
            </h3>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="مثال: علی محمدی"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل یا شماره موبایل</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نوع کاربری</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white">
                  <option>ورزشکار حرفه‌ای</option>
                  <option>مربی ورزشی</option>
                  <option>فیزیوتراپیست</option>
                  <option>محقق دانشگاهی</option>
                  <option>سایر</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-btn font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-glow-blue"
              >
                دریافت دمو رایگان →
              </button>
            </form>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              🔒 اطلاعات شما کاملاً محرمانه باقی می‌ماند
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
