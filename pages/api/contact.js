export default async function Contact (req, res) {
  require("dotenv").config();

  const USERNAME = process.env.username;
  const PASSWORD = process.env.password;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
    debug: false,
    logger: true
  });

  const mailData = {
    from: "noreply@burkspestcontrol.com",
    to: 'burkspestcontrol@yahoo.com',
    subject: "Burks Pest Control Contact Us Form",
    context: {
      name: "Burks Pest Control",
      company: "Burks Pest Control"
    },
    // text: `Name: ${req.body.name} + Email: ${req.body.email} + Message: ${req.body.message}`,
    html: `<div>Name: ${req.body.name}</div><br />
           <p>Email: ${req.body.email}</p><br />
           <div>Message: ${req.body.message}</div>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else { 
        console.log(info);
        resolve(info);
      }
    });
  });  

  res.status(200).json({ status: "OK"});
  res.send();
}