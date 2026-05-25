"use client";

import { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { FloatingSupport } from "../../components/ui/FloatingSupport";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    userType: "athlete",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // شبیه‌سازی ارسال به سرور
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", userType: "athlete" });
    
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: "ایمیل", value: "info@motiongate.ir", href: "mailto:info@motiongate.ir" },
    { icon: <Phone className="w-6 h-6" />, label: "تلفن", value: "۰۲۱-۰۰۰۰۰۰۰۰", href: "tel:+982100000000" },
    { icon: <MapPin className="w-6 h-6" />, label: "آدرس", value: "تهران، خیابان ولیعصر، برج فناوری", href: "#" },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* هدر صفحه تماس */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            تماس با <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600">موشن گیت</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            سوالات، پیشنهادات یا درخواست دمو؟ تیم پشتیبانی ما آماده پاسخگویی است.
          </p>
        </div>
      </section>

      {/* محتوای اصلی */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* فرم تماس */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">ارسال پیام</h2>
              
              {submitStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>پیام شما با موفقیت ارسال شد! کارشناسان ما به زودی با شما تماس خواهند گرفت.</span>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="علی محمدی"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">شماره موبایل</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نوع کاربری</label>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                    >
                      <option value="athlete">ورزشکار حرفه‌ای</option>
                      <option value="coach">مربی ورزشی</option>
                      <option value="physio">فیزیوتراپیست</option>
                      <option value="researcher">محقق دانشگاهی</option>
                      <option value="clinic">کلینیک/باشگاه</option>
                      <option value="other">سایر</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">موضوع *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="مثال: درخواست دمو رایگان"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">پیام شما *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="پیام خود را اینجا بنویسید..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-btn font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-glow-blue disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      در حال ارسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      ارسال پیام
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* اطلاعات تماس */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">راه‌های ارتباطی</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-surface rounded-2xl hover:bg-blue-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="font-bold text-slate-900">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* ساعات کاری */}
              <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-3">🕐 ساعات پشتیبانی</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>شنبه تا چهارشنبه: ۹:۰۰ - ۱۸:۰۰</li>
                  <li>پنجشنبه: ۹:۰۰ - ۱۴:۰۰</li>
                  <li>جمعه: تعطیل</li>
                  <li className="pt-2 border-t border-blue-400/30">
                    📱 پشتیبانی اضطراری: ۲۴/۷ از طریق واتساپ
                  </li>
                </ul>
              </div>
              
              {/* دکمه واتساپ بزرگ */}
              <a
                href="https://wa.me/989123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white rounded-btn font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                گفتگو در واتساپ
              </a>
            </motion.div>

          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingSupport />
    </main>
  );
}
