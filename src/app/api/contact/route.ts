import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Access environment variables
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  // Validation: Check if environment variables are set
  if (!gmailEmail || !gmailAppPassword || !receiverEmail) {
    console.error('Missing environment variables!');
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail, // Use environment variable
      pass: gmailAppPassword, // Use environment variable
    },
  });

  const mailOptions = {
    from: gmailEmail, // Use environment variable
    to: receiverEmail, // Use environment variable (THE IMPORTANT CHANGE!)
    subject: `New Message from Susthayi Krishi Foundation ${name} `, // CHANGE THE SUBJECT
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
