export default function Quote (req, res) {
    require("dotenv").config();

    const USERNAME = process.env.username;
    const PASSWORD = process.env.password;

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
    port: 465,
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: `noreply@burkspestcontrol.com`,
    to: 'burkspestcontrol@yahoo.com',
    subject: "Burks Pest Control Quote Form",
    context: {
      name: "Burks Pest Control",
      company: "Burks Pest Control"
    },
    // text: `Name: ${req.body.firstName} ${req.body.lastName} + Email: ${req.body.email} + Message: ${req.body.message}`,
    html: `
            <div>Name: ${req.body.firstName} ${req.body.lastName}</div>
            <div>Address: ${req.body.address}</div>
            <div>City: ${req.body.city}</div>
            <div>State: ${req.body.state}<div>
            <div>Zip Code: ${req.body.zipCode}</div>
            <div>Phone: ${req.body.phone}</div>
            <div>Email: ${req.body.email}</div>
            <div>Prefer Contact: ${req.body.preferContact}</div>
            <div>Service Options: ${req.body.serviceOptions}</div>
          `,
  };

    transporter.sendMail(mailData, function (err, info) {
      if (err) { 
        console.log(err);
      } else {
        console.log(info);
      } 
  });

  res.status(200).json({ status: "OK" });
  res.send();
}