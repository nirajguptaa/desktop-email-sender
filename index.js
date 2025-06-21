const nodemailer = require('nodemailer');
require('dotenv').config();
async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:  process.env.EMAIL_USER,//change with gmail id
      pass:  process.env.EMAIL_PASS // Your App Password (looks okay)
    }
  });

  const info = await transporter.sendMail({
    from: '"Email Sender App" <EMAIL_USER>',//change with gmail id
    to,
    subject,
    text
  });


  return info.messageId;
}

module.exports = { sendEmail };