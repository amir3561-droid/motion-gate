import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "ویژگی‌ها", href: "#features" },
    { label: "نحوه کار", href: "#how-it-works" },
    { label: "قیمت‌گذاری", href: "#pricing" },
    { label: "مستندات API", href: "#" },
  ],
  company: [
    { label: "درباره ما", href: "#" },
    { label: "وبلاگ", href: "#" },
    { label: "فرصت‌های شغلی", href: "#" },
    { label: "تماس با ما", href: "#contact" },
  ],
  legal: [
    { label: "قوانین و مقررات", href: "#" },
    { label: "حریم خصوصی", href: "#" },
    { label: "شرایط استفاده", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* بخش بالایی فوتر */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* لوگو و توضیحات */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-2xl">موشن گیت</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              پلتفرم تخصصی تحلیل‌های بیومکانیکی با هوش مصنوعی. 
              کمک به ورزشکاران، مربیان و متخصصان برای بهبود عملکرد و پیشگیری از آسیب.
            </p>
            
            {/* شبکه‌های اجتماعی - با ایموجی برای اطمینان */}
            <div className="flex items-center gap-4">
              <a href="#" className="px-4 py-2 bg-slate-800 rounded-lg text-gray-400 hover:bg-pink-600 hover:text-white transition-all text-sm font-medium">
                📷 اینستاگرام
              </a>
              <a href="#" className="px-4 py-2 bg-slate-800 rounded-lg text-gray-400 hover:bg-blue-700 hover:text-white transition-all text-sm font-medium">
                💼 لینکدین
              </a>
              <a href="#" className="px-4 py-2 bg-slate-800 rounded-lg text-gray-400 hover:bg-gray-600 hover:text-white transition-all text-sm font-medium">
                🐙 گیت‌هاب
              </a>
            </div>
          </div>

          {/* لینک‌های محصول */}
          <div>
            <h4 className="font-bold text-lg mb-6">محصول</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* لینک‌های شرکت */}
          <div>
            <h4 className="font-bold text-lg mb-6">شرکت</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* لینک‌های حقوقی */}
          <div>
            <h4 className="font-bold text-lg mb-6">قانونی</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            
            {/* اطلاعات تماس */}
            <div className="flex flex-col gap-3">
              <a href="mailto:info@motiongate.ir" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@motiongate.ir</span>
              </a>
              <a href="tel:+982100000000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>۰۲۱-۰۰۰۰۰۰۰۰</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>تهران، خیابان ولیعصر، برج فناوری</span>
              </div>
            </div>

            {/* کپی‌رایت */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © ۱۴۰۳ موشن گیت. تمامی حقوق محفوظ است.
              </p>
            </div>

            {/* نماد اعتماد */}
            <div className="flex justify-center md:justify-end gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                اینماد
              </div>
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                ساماندهی
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
