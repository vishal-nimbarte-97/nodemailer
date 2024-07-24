const nodemailer = require("nodemailer");//required the nodemailer

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'frank.koch13@ethereal.email',
      pass: 'UNwew62R1djPQu2wEN'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <vishalnimbarte097@gmail.com>', // sender address
    to: "sumit@gmail.com, amit@gmail.com", // list of receivers
    subject: "This is Simple email They are send with help of the nodemailer package..!", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent Successfully On Id : %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
