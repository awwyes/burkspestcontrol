export default function (req, res) {
  require("dotenv").config();

  const USERNAME = process.env.username;
  const PASSWORD = process.env.password;
  const SENDADDRESS = process.env.sendtoaddress;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: USERNAME,
    to: SENDADDRESS,
    subject: "Burks Pest Control Contact Us Form",
    text: `Name: ${req.body.fullname} + Email: ${req.body.email} + Message: ${req.body.message}`,
    html: `<div>Name: ${req.body.fullname}</div><br />
                <p>Email: ${req.body.email}</p><br />
                <div>Message: ${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
  res.send();
}