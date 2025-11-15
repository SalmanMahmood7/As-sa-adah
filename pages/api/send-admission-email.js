import nodemailer from "nodemailer";

let transporterCache = null;

const REQUIRED_ENV_VARS = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "ADMISSIONS_EMAIL_FROM"];

const ensureEmailConfig = () => {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(
      `Missing SMTP configuration. Please set the following environment variables: ${missing.join(", ")}`
    );
  }
};

const getTransporter = () => {
  if (transporterCache) return transporterCache;
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  transporterCache = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporterCache;
};

const buildEmailBody = ({ studentName, pdfDownloadUrl }) => {
  const safeName = studentName?.trim() || "Applicant";
  const greeting = `Assalamu Alaikum ${safeName},`;
  const intro =
    "Thank you for submitting your admission form for the As-Sa'adah IT Boot Camp. A copy of your form is ready for your records.";
  const linkInstruction = pdfDownloadUrl
    ? `You can download the PDF using the secure link below:`
    : `We've attached the PDF with this email.`;
  const outro =
    "If you did not request this form, please ignore this message. For questions, reply to this email or contact the admissions team directly.";

  return {
    text: `${greeting}\n\n${intro}\n\n${linkInstruction}\n${pdfDownloadUrl ?? ""}\n\n${outro}\n\nJazakum Allahu Khairan,\nAs-Sa'adah Admissions`,
    html: `
      <p>${greeting}</p>
      <p>${intro}</p>
      <p>${linkInstruction}</p>
      ${
        pdfDownloadUrl
          ? `<p><a href="${pdfDownloadUrl}" target="_blank" rel="noopener noreferrer">Download your admission form</a></p>`
          : ""
      }
      <p>${outro}</p>
      <p>Jazakum Allahu Khairan,<br/>As-Sa'adah Admissions</p>
    `,
  };
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { recipientEmail, studentName, pdfDownloadUrl, pdfFileName, pdfBase64 } = req.body || {};

  if (!recipientEmail || !studentName) {
    return res.status(400).json({ error: "Recipient email and student name are required." });
  }

  try {
    ensureEmailConfig();
    const transporter = getTransporter();

    const { text, html } = buildEmailBody({ studentName, pdfDownloadUrl });

    const mailOptions = {
      from: process.env.ADMISSIONS_EMAIL_FROM,
      to: recipientEmail,
      subject: `As-Sa'adah Admission Form Receipt – ${studentName}`,
      text,
      html,
    };

    if (!pdfDownloadUrl && pdfBase64) {
      mailOptions.attachments = [
        {
          filename: pdfFileName || "admission-form.pdf",
          content: pdfBase64,
          encoding: "base64",
          contentType: "application/pdf",
        },
      ];
    }

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send admission email:", error);
    return res.status(500).json({ error: "Unable to send admission confirmation email." });
  }
}
