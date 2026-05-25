"use client";

import { motion } from "framer-motion";

// آیکون SVG ورزشکار
const AthleteIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <circle cx="32" cy="10" r="6" fill="currentColor" />
    <path d="M32 20C28 20 24 24 24 28V36L20 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 20C36 20 40 24 40 28V36L44 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M24 28H40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <rect x="8" y="32" width="12" height="6" rx="2" fill="currentColor" />
    <rect x="44" y="32" width="12" height="6" rx="2" fill="currentColor" />
    <path d="M4 34H8M56 34H52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// آیکون SVG فیزیوتراپ
const PhysioIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <circle cx="32" cy="14" r="7" stroke="currentColor" strokeWidth="3" />
    <path d="M22 24C22 24 18 28 18 34C18 40 22 44 26 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M42 24C42 24 46 28 46 34C46 40 42 44 38 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 46L28 54M38 46L36 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 30V38M32 34H28M32 34H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="42" r="4" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

// آیکون SVG مربی
const CoachIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <rect x="12" y="16" width="36" height="40" rx="4" stroke="currentColor" strokeWidth="3" />
    <path d="M20 16V12C20 8 24 6 28 6H36C40 6 44 8 44 12V16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="44" cy="30" r="6" fill="currentColor" />
    <path d="M42 28L44 30L48 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="20" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="44" x2="32" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// آیکون SVG محقق
const ResearcherIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <path d="M32 8C24 8 18 12 18 18V24C18 32 24 38 32 40C40 38 46 32 46 24V18C46 12 40 8 32 8Z" stroke="currentColor" strokeWidth="3" />
    <circle cx="32" cy="22" r="4" fill="currentColor" />
    <path d="M28 28H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 26V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="20" y="38" width="24" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
    <path d="M24 50V54M40 50V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 54H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const audiences = [
  {
    icon: <AthleteIcon />,
    title: "ورزشکاران حرفه‌ای",
    description: "بهبود عملکرد و پیشگیری از آسیب با تحلیل دقیق حرکات تخصصی ورزشی",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: <PhysioIcon />,
    title: "فیزیوتراپیست‌ها",
    description: "ارزیابی دقیق بیماران و پیگیری روند بهبودی با گزارش‌های علمی",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: <CoachIcon />,
    title: "مربیان ورزشی",
    description: "اصلاح تکنیک ورزشکاران و طراحی برنامه‌های تمرینی شخصی‌سازی‌شده",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: <ResearcherIcon />,
    title: "محققان و دانشگاهیان",
    description: "دسترسی به داده‌های دقیق بیومکانیکی برای پژوهش‌های علمی",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

// تنظیمات انیمیشن برای ظاهر شدن کارت‌ها
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // تاخیر بین نمایش هر کارت
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Audience() {
  return (
    <section id="audience" className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* هدر بخش */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-bold mb-4 shadow-sm">
            👥 کاربران ما
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            موشن گیت برای چه کسانی است؟
          </h2>
          
          <p className="text-lg text-gray-600">
            از ورزشکاران حرفه‌ای تا محققان دانشگاهی، همه از تحلیل‌های دقیق ما بهره‌مند می‌شوند
          </p>
        </motion.div>

        {/* گرید کاربران با آیکون‌های SVG */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300 text-center group relative overflow-hidden"
            >
              {/* افکت پس‌زمینه رنگی */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* آیکون SVG */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-24 h-24 ${audience.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 relative z-10 ${audience.iconColor}`}
              >
                {audience.icon}
              </motion.div>
              
              {/* عنوان و توضیحات */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
