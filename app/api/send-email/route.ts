import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

   

    const transporter = nodemailer.createTransport({
        host: "mail.ctgspa.com",
        port: 465,
        secure: true,
        auth: {
            user: "info@ctgspa.com",
            pass: "Dhakabd71!@",
        },
        tls: {
            rejectUnauthorized: false, 
        },
    });

    

    const mailOptions = {
      from: `"CTGSpan Booking" <info@ctgspa.com>`,
      to: "info@ctgspa.com",
      subject: "New Appointment Booking",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #d32f2f;">📅 New Booking Request</h2>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📞 Phone:</strong> ${phone}</p>
          <p><strong>📝 Message:</strong></p>
          <p style="background: #fff; padding: 15px; border-left: 4px solid #d32f2f;">${message}</p>
          <br/>
          <p style="font-size: 12px; color: #777;">— CTGSpan Booking Form</p>
        </div>
      `,
    };

    const res = await transporter.sendMail(mailOptions);
    console.log({res});
    

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, message: "Email failed to send" }, { status: 500 });
  }
}
