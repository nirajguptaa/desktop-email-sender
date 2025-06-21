const { sendEmail } = require('./index');

async function send() {
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  try {
    const msgId = await sendEmail(to, subject, message);
    status.innerText = `Sent! ID: ${msgId}`;
  } catch (err) {
    status.innerText = `Failed: ${err.message}`;
  }
}