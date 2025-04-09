import nodemailer from "nodemailer";

const sendEmail = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

  
    const mailOptions = {
      from: process.env.ADMIN_EMAIL, // SMTP email
      to: process.env.ADMIN_EMAIL, // Admin ko mail jayega
      subject: "New User Registered",
      text: `Name: ${user.name}\nEmail: ${user.email}\nMobile: ${user.mobile}\nUser Type: ${user.userType}`,
      replyTo: user.email, // Admin jab reply karega, to ye email automatically set hoga
    };
    

    await transporter.sendMail(mailOptions);
    console.log(" Email sent to admin");
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};

export default sendEmail; // Default export
