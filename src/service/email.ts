import nodemailer from "nodemailer";

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({ from, subject, message }: EmailData) {
  return transporter.sendMail({
    from,
    to: process.env.EMAIL_USER,
    subject,
    html: `
    <div style="background-color: #f8f9f9; padding: 2.5em">
      <h1>${subject}</h1>
      <p>${message}</p>
      <h3>from: </span>${from}</h3>
    </div>
    `,
  });
}
