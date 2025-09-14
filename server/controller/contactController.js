const sendEmail = require('../utils/sendEmail');

const createNewMessage = async (req, res) => {
  const { name, mail, subject, phone, text } = req.body;

  if (!name || !mail || !subject || !phone || !text) {
    return res
      .status(400)
      .json({
        message: 'All fields are required, name, mail,subject,phone,text',
      });
  }

  try {
    await sendEmail({
      to: process.env.EMAIL_ADMIN,
      subject: `Nova poruka od ${name}, ${subject}`,
      text: `Ime: ${name}\nEmail: ${mail}\n\n${text}`,
      html: `
      <p><strong>Ime:</strong>${name}</p>
      <p><strong>Email:</strong>${mail}</p>
      <p><strong>Telefon:</strong>${phone}</p>
      <p><strong>Poruka:</strong></p>
      <p>${text}</p>
      `,
    });

    res.status(201).json({ message: 'New message was created' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Server error, try letter', error: err.message });
  }
};

module.exports = { createNewMessage };
