const nodemailer = require('nodemailer')

const dadosEmail = {
    host: process.env['MAIL_MAILTRAP_HOST'],
    port: process.env['MAIL_MAILTRAP_PORT'],
    auth: {
        user: process.env['MAIL_MAILTRAP_USER'],
        pass: process.env['MAIL_MAILTRAP_PASS']
    }
}

console.log(dadosEmail)

const transporter = nodemailer.createTransport(dadosEmail)


transporter.sendMail({
    from: "William Pacheco <blau@gmail.com>",
    to: "dg@gmail.com",
    subject: "Oi, este eh um email de teste",
    text: "ola sou teobaldo"

})