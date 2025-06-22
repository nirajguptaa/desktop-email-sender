const nodemailer = require('nodemailer');
require('dotenv').config();
async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:  process.env.EMAIL_USER,
      pass:  process.env.EMAIL_PASS 
    }
  });

  const info = await transporter.sendMail({
    from: '"Email Sender App" <EMAIL_USER>',
    to,
    subject,
    text
  });


  return info.messageId;
}

module.exports = { sendEmail };
