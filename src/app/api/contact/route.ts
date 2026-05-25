import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, userType } = body;

    // اعتبارسنجی ساده
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "نام، ایمیل و پیام الزامی هستند" },
        { status: 400 }
      );
    }

    // اینجا می‌توانید به سرویس ایمیل (مثل Resend, SendGrid) یا دیتابیس متصل شوید
    // مثال برای ارسال ایمیل با Resend:
    /*
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Motion Gate <noreply@motiongate.ir>",
        to: ["info@motiongate.ir"],
        subject: `پیام جدید از ${name}: ${subject}`,
        text: `
          نام: ${name}
          ایمیل: ${email}
          تلفن: ${phone || "ندارد"}
          نوع کاربر: ${userType}
          پیام: ${message}
        `,
      }),
    });
    */

    // لاگ در کنسول (برای توسعه)
    console.log("📩 پیام جدید:", { name, email, phone, subject, message, userType });

    return NextResponse.json(
      { success: true, message: "پیام با موفقیت ارسال شد" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ خطا در ارسال پیام:", error);
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
