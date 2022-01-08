import nodemailer from 'nodemailer';

export default function (req, res) {
    require('dotenv').config()

    const USERNAME = process.env.username;
    const PASSWORD = process.env.password;
    const SENDADDRESS = process.env.sendtoaddress;

    let nodemailer = require('nodemailer')
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
        subject: `Message From ${req.body.fullname}`,
        text: req.body.message + " | Sent from : " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
            ${req.body.email}</p>`
    };

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });

    res.status(200);
}