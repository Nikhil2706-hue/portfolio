import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // In production, send via Nodemailer / Resend / Sendgrid
    console.log('Received Contact Form Submission:', { name, email, subject, message });

    return NextResponse.json(
      { success: true, message: 'Thank you! Your message has been sent successfully.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
