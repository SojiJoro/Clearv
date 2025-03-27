// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Create a Nodemailer transporter using Zoho SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465, // Use 465 for SSL (or 587 for TLS if preferred)
      secure: true, // true for 465
      auth: {
        user: process.env.ZOHO_USER, // info@clearvitalsocialcare.com
        pass: process.env.ZOHO_PASS
      }
    });

    const mailOptions = {
      from: email, // Sender's email from the form
      to: 'info@clearvitalsocialcare.com', // Recipient updated here
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending message.' }, { status: 500 });
  }
}
