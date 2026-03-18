// app/api/send/route.ts
import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { appendSubmissionToSheet } from "@/lib/googleSheets"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      city,
      stateProvince,
      messageLine1,
    } = body

    if (!firstName || !lastName || !email || !phone || !city || !stateProvince) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided" },
        { status: 400 }
      )
    }

    const sheetResult = await appendSubmissionToSheet({
      source: "industries",
      firstName,
      lastName,
      email,
      phone,
      message: messageLine1,
      meta: { city, stateProvince },
    })

    if (sheetResult.skipped) {
      return NextResponse.json(
        { success: false, message: "Google Sheets is not configured. Please set GSHEET_ID, GSHEET_TAB (optional), and GOOGLE_SERVICE_ACCOUNT_JSON_BASE64." },
        { status: 500 }
      )
    }

    const mailHost = process.env.MAIL_HOST
    const mailUser = process.env.MAIL_USERNAME
    const mailPass = process.env.MAIL_PASSWORD

    // Email is best-effort: sheet is the primary objective.
    if (mailHost && mailUser && mailPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: mailHost,
          port: Number.parseInt(process.env.MAIL_PORT || "587"),
          secure: false, // true if using port 465
          auth: {
            user: mailUser,
            pass: mailPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        })

        const fromName = process.env.MAIL_FROM_NAME || "Aromahpure Air"

    // ✅ Admin email content
    const adminEmailContent = `
     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; color: #4a5b53;">

      <!-- Logo -->
      <div style="text-align: left; margin-bottom: 20px;">
        <img src="https://www.aromahpureair.com/Aromahpurelogo.png" 
             alt="Aromahpure Air" style="height: 40px;">
      </div>

      <!-- Illustration -->
      <div style="text-align: center; margin: 20px 0;">
        <img src="https://www.aromahpureair.com/envelope.png" 
             alt="Email Illustration" style="max-width: 100%; height: auto;">
      </div>

      <!-- Divider -->
      <hr style="margin: 20px auto; border: none; border-top: 1px solid #ddd; width: 80%;">

      <!-- Title -->
      <h2 style="text-align: center; font-weight: normal; color: #364233; margin-top: 10px;">
        New Inquiry – NEED SCENTING FOR YOUR INDUSTRY
      </h2>

      <!-- Contact Details -->
      <div style="background-color: #f1ece5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #364233; margin-top: 0;">Contact Details:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${city}, ${stateProvince}</p>
      </div>

      <!-- Message -->

      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #62705a;">
        <h3 style="color: #364233; margin-top: 0;">Message:</h3>
        <p style="line-height: 1.6;">${messageLine1}</p>
      </div>



      <!-- Divider -->
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

      <!-- Social Media Icons -->
      <div style="text-align: center; margin: 20px 0;">
        <a href="https://facebook.com" style="margin: 0 8px; text-decoration: none;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
               alt="Facebook" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.instagram.com/aromahpure_air/" style="margin: 0 8px; text-decoration: none;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" 
               alt="Instagram" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.linkedin.com/company/aromahpure-air/" style="margin: 0 8px; text-decoration: none;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" 
               alt="LinkedIn" style="width: 24px; height: 24px;">
        </a>
      </div>

      <!-- Footer -->
      <div style="text-align: center; font-size: 12px; color: #999; padding-top: 10px;">
        &copy; AVA International PVT. LTD. All Rights Reserved.
      </div>
    </div>
    `

    // ✅ User acknowledgment email content
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; color: #4a5b53;">
  
  <!-- Logo -->
  <div style="text-align: left; margin-bottom: 20px;">
    <img src="https://www.aromahpureair.com/Aromahpurelogo.png" alt="Aromahpure Air" style="height: 40px;">
  </div>

  <!-- Illustration -->
  <div style="text-align: center; margin: 20px 0;">
    <img src="https://www.aromahpureair.com/envelope.png" alt="Email Illustration" style="max-width: 100%; height: auto;">
  </div>

  <!-- Divider under Illustration -->
  <hr style="margin: 20px auto; border: none; border-top: 1px solid #ddd; width: 80%;">

  <!-- Title -->
  <h2 style="text-align: center; font-weight: normal; color: #4a5b53; margin-top: 10px;">
    Your Aromahpure Air Journey Starts Now
  </h2>

  <!-- Body Content -->
  <p style="text-align: center; line-height: 1.6; font-size: 15px; margin: 20px 0;">
    Hello ${firstName}, <br><br>
    Thank you for reaching out to Aromahpure Air. We've received your inquiry and our team will be in touch shortly.
    <br><br>
    We appreciate your interest in Aromahpure Air and look forward to assisting you.
  </p>

  <!-- Signature -->
  <p style="text-align: center; margin-top: 30px; font-size: 15px;">
    Best regards,<br>
    Aromahpure Air Team
  </p>

  <!-- Divider -->
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <!-- Social Media Icons -->
  <div style="text-align: center; margin: 20px 0;">
    <a href="https://facebook.com" style="margin: 0 8px; text-decoration: none;">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style="width: 24px; height: 24px;">
    </a>
    <a href="https://www.instagram.com/aromahpure_air/" style="margin: 0 8px; text-decoration: none;">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" style="width: 24px; height: 24px;">
    </a>
    <a href="https://www.linkedin.com/company/aromahpure-air/" style="margin: 0 8px; text-decoration: none;">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" style="width: 24px; height: 24px;">
    </a>
  </div>

  <!-- Footer -->
  <div style="text-align: center; font-size: 12px; color: #999; padding-top: 10px;">
    &copy; AVA International PVT. LTD. All Rights Reserved.
  </div>
</div>
    `

        // Send to admin
        await transporter.sendMail({
          from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
          to: process.env.ADMIN_EMAIL,
          subject: `New Industry Scenting Inquiry from ${firstName} ${lastName}`,
          html: adminEmailContent,
        })

        // Send to user
        await transporter.sendMail({
          from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
          to: email,
          subject: "New Industry Scenting Inquiry - Thank you for contacting Aromahpure Air",
          html: userEmailContent,
        })
      } catch (error) {
        console.error("❌ Error sending emails:", error)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Saved successfully",
    })
  } catch (error) {
    console.error("❌ Error handling industries submission:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process submission" },
      { status: 500 }
    )
  }
}
