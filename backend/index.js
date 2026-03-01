require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Thank you for contacting me",
  html: `
    <h3>Hi ${name},</h3>
    <p>Thanks for reaching out. I will get back to you soon.</p>
  `,
});

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});