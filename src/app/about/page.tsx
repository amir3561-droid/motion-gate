import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { FloatingSupport } from "../../components/ui/FloatingSupport";
import { CheckCircle2, Target, Users, Award } from "lucide-react";

export const metadata = {
  title: "درباره موشن گیت | تحلیل بیومکانیک با هوش مصنوعی",
  description: "موشن گیت پلتفرم تخصصی تحلیل‌های بیومکانیکی ورزشی و درمانی با استفاده از هوش مصنوعی پیشرفته است.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* هدر صفحه درباره ما */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            درباره <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600">موشن گیت</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ما با ترکیب فناوری هوش مصنوعی و تخصص بیومکانیک، تحلیل حرکت را برای همه در دسترس قرار داده‌ایم.
          </p>
        </div>
      </section>

      {/* بخش داستان ما */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">داستان ما</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                موشن گیت در سال ۱۴۰۱ با هدف democratize کردن تحلیل‌های بیومکانیکی تأسیس شد. 
                ما معتقدیم هر ورزشکار، مربی و متخصصی باید به ابزارهای حرفه‌ای تحلیل حرکت دسترسی داشته باشد.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                تیم ما متشکل از متخصصان هوش مصنوعی، بیومکانیک ورزشی و توسعه‌دهندگان نرم‌افزار است 
                که با هم همکاری می‌کنند تا دقیق‌ترین و کاربرپسندترین پلتفرم تحلیل حرکت را ارائه دهند.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>تیم متخصص بین‌رشته‌ای</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>پشتیبانی از استانداردهای علمی</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-white text-4xl font-bold">MG</span>
                </div>
                <p className="text-gray-600 font-medium">لوگوی موشن گیت</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش ماموریت و ارزش‌ها */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ماموریت و ارزش‌های ما</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ما به اصولی پایبندیم که موفقیت مشتریانمان را تضمین می‌کند
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-8 h-8" />, title: "دقت علمی", desc: "استفاده از مدل‌های تأییدشده علمی با دقت ۹۹.۷٪" },
              { icon: <Users className="w-8 h-8" />, title: "کاربرمحوری", desc: "طراحی تجربه کاربری ساده و در دسترس برای همه" },
              { icon: <Award className="w-8 h-8" />, title: "نوآوری", desc: "بهره‌گیری از آخرین پیشرفت‌های هوش مصنوعی" },
              { icon: <CheckCircle2 className="w-8 h-8" />, title: "اعتماد", desc: "حفظ کامل حریم خصوصی و امنیت داده‌های شما" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-hover transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش آمار */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "۱۰K+", label: "تحلیل انجام‌شده" },
              { num: "۵۰۰+", label: "کاربر فعال" },
              { num: "۹۹.۷٪", label: "دقت مدل" },
              { num: "۲۴/۷", label: "پشتیبانی" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600 mb-2">
                  {stat.num}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA نهایی */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">آماده همکاری با ما هستید؟</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            برای مشاوره رایگان یا درخواست دمو، با تیم ما تماس بگیرید
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-btn font-bold hover:bg-blue-50 transition-all shadow-lg">
            تماس با ما
          </a>
        </div>
      </section>
      
      <Footer />
      <FloatingSupport />
    </main>
  );
}
