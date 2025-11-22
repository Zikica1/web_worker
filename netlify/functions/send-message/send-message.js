/* eslint-env node */

import nodemailer from 'nodemailer';

export const handler = async (event) => {
  try {
    // Provera metode (dozvoljen samo POST)
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ success: false, error: 'Method not allowed' }),
      };
    }

    let { name, email, subject, phone, text, robotTrap } = JSON.parse(
      event.body || '{}'
    );

    // ---- HONEYPOT ANTI-SPAM ----
    if (robotTrap && robotTrap.trim() !== '') {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Bot detected',
        }),
      };
    }

    // ---- SANITIZACIJA (basic) ----
    const sanitize = (str) =>
      String(str)
        .trim()
        .replace(/<\/?[^>]+(>|$)/g, ''); // uklanja HTML tagove

    name = sanitize(name);
    email = sanitize(email);
    subject = sanitize(subject);
    phone = sanitize(phone);
    text = sanitize(text);

    // ---- VALIDACIJA ----
    if (!name || !email || !subject || !phone || !text) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, subject, phone, text',
        }),
      };
    }

    // Email format validacija
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Invalid email format',
        }),
      };
    }

    // Phone minimalna validacija
    if (phone.length < 5) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Invalid phone number',
        }),
      };
    }

    // ---- MAIL SENDING ----
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Gmail koji šalje
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const mailOptions = {
      from: `"Kontakt Forma" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // Email koji prima
      subject: 'Nova poruka sa sajta',
      text: `
Ime: ${name}
Email: ${email}
Telefon: ${phone}
Tema: ${subject}

Poruka:
${text}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Poruka uspešno poslata!',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};
