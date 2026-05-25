"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "پایه",
    price: "رایگان",
    period: "",
    description: "مناسب برای آشنایی با سیستم",
    features: [
      "۳ تحلیل در ماه",
      "گزارش PDF ساده",
      "تحلیل ویدیو تا ۳۰ ثانیه",
      "پشتیبانی ایمیلی",
    ],
    cta: "شروع رایگان",
    popular: false,
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    name: "حرفه‌ای",
    price: "۲۵,۰۰۰,۰۰۰",
    period: "تومان/ماه",
    description: "مناسب برای ورزشکاران و مربیان حرفه‌ای",
    features: [
      "تحلیل نامحدود",
      "گزارش PDF حرفه‌ای",
      "تحلیل ویدیو تا ۵ دقیقه",
      "مقایسه حرکات",
      "پشتیبانی تلفنی",
      "دسترسی به آرشیو",
      "مشاوره تخصصی ماهانه",
    ],
    cta: "انتخاب پلن حرفه‌ای",
    popular: true,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "سازمانی",
    price: "۷۵,۰۰۰,۰۰۰",
    period: "تومان/ماه",
    description: "مناسب برای کلینیک‌ها، باشگاه‌ها و دانشگاه‌ها",
    features: [
      "همه امکانات حرفه‌ای",
      "تحلیل ویدیو نامحدود",
      "پنل مدیریت تیم",
      "API اختصاصی",
      "پشتیبانی ۲۴/۷",
      "گزارش‌های سفارشی",
      "آموزش حضوری",
      "نصب و راه‌اندازی رایگان",
      "کاربران نامحدود",
    ],
    cta: "تماس با فروش",
    popular: false,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* هدر بخش */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-blue-200 text-blue-700 rounded-full text-sm font-bold mb-4 shadow-sm"
          >
            💎 پلن‌های قیمت‌گذاری
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            پلن مناسب خود را انتخاب کنید
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            از تحلیل رایگان شروع کنید و در صورت نیاز به پلن‌های حرفه‌ای ارتقا دهید
          </motion.p>
        </div>

        {/* کارت‌های قیمت */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? "bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-2xl scale-105 z-10" 
                  : "bg-white border-2 border-gray-100 text-slate-900 shadow-soft"
              }`}
            >
              {/* نشان پرمخاطب */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    پرمخاطب‌ترین
                  </span>
                </div>
              )}
              
              {/* نام پلن */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                {plan.description}
              </p>
              
              {/* قیمت */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                </div>
                <span className={`text-sm ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>
              
              {/* ویژگی‌ها */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-blue-200" : "text-green-500"}`} />
                    <span className={`text-sm ${plan.popular ? "text-blue-50" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* دکمه CTA */}
              <button
                className={`w-full py-4 rounded-btn font-bold transition-all ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-glow-blue"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* توضیحات تکمیلی */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 text-sm">
            💡 تمامی پلن‌ها شامل ۷ روز ضمانت بازگشت وجه هستند. برای اطلاعات بیشتر با ما تماس بگیرید.
          </p>
        </div>

      </div>
    </section>
  );
}
