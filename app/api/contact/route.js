import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      company,
      email,
      fullName,
      location,
      message,
      phone,
      subject,
      customer,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `
          Contact Us Inquiry: ${subject}`,
      html: `
   <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  padding: 20px;
              }
              .container {
                  max-width: 600px;
                  margin: auto;
                  background: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333;
                  text-align: start;
              }
              .field {
                  margin-bottom: 15px;
              }
              .field strong {
                  color: #555;
              }
              .footer {
                  text-align: center;
                  margin-top: 20px;
                  font-size: 12px;
                  color: #888;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h2>${
                customer
                  ? "New Request A Quote Form Submission"
                  : "New Contact Form Submission"
              }</h2>
              
              <div class="field"><strong>Full Name:</strong> ${fullName}</div>
              <div class="field"><strong>Email:</strong> ${email}</div>
              <div class="field"><strong>Phone Number:</strong> ${phone}</div>
              <div class="field"><strong>Company Name:</strong> ${
                company || "N/A"
              }</div>

              ${
                location
                  ? `<div class="field"><strong>Location:</strong> ${location}</div>`
                  : ""
              }
              
              <div class="field"><strong>Subject:</strong> ${subject}</div>

              ${
                customer
                  ? `<div class="field"><strong>Are You a Current Customer?:</strong> ${customer}</div>`
                  : ""
              }
<div class="field"><strong>Message:</strong> ${message}</div>
             

              <div class="footer">This is an automated email. Please do not reply.</div>
          </div>
      </body>
      </html>
    `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email Sent Successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error Sending Email:", error);

    return new Response(JSON.stringify({ error: "Failed To Send Email" }), {
      status: 500,
    });
  }
}
