const nodemailer = require('nodemailer');
const expressAsyncHandler = require("express-async-handler");

const sendEmail = expressAsyncHandler(async(data, req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MT,
        },
      });
      async function main() {
        const info = await transporter.sendMail({
          from: {
            name: 'Ramziddin',
            address: process.env.MAIL_ID
          },
          to: data.to, 
          subject: data.subject, 
          text: data.text, 
          html: data.html, 
        });
      }   
      main().catch(console.error);
})

module.exports = {
    sendEmail
};