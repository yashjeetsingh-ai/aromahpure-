import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    const adminEmailContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">

  <!-- Logo (Top Left) -->
  <div style="text-align: left; margin-bottom: 25px;">
    <img src="https://www.aromahpureair.com/Aromahpurelogo.png" alt="Aromahpure Air" style="height: 45px;">
  </div>

  <!-- Illustration (Center) -->
  <div style="text-align: center; margin-bottom: 30px;">
    <img src="https://www.aromahpureair.com/envelope.png" alt="Email Illustration" style="height: 60px; max-width: 100%;">
  </div>

  <!-- Main Content -->
  <div style="text-align: center; color: #4a5b53;">
    <h2 style="color: #364233; margin-bottom: 10px;">Join Our Community</h2>
    <p style="margin: 8px 0;">A new user wants to join the community:</p>
    <p style="font-size: 16px; margin-top: 12px;"><strong>Email:</strong> ${email}</p>
  </div>

</div>

    `;

    await transporter.sendMail({
      from: `"Aromahpure Air" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "Join Our Community",
      html: adminEmailContent,
    });

    return NextResponse.json({ success: true, message: "Email sent to admin" });
  } catch (error) {
    console.error("Error sending join-community email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
