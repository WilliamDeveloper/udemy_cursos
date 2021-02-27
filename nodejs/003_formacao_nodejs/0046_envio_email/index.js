const nodemailer = require('nodemailer')

const credenciaisEmail = {
    host: process.env['MAIL_MAILTRAP_HOST'],
    port: process.env['MAIL_MAILTRAP_PORT'],
    auth: {
        user: process.env['MAIL_MAILTRAP_USER'],
        pass: process.env['MAIL_MAILTRAP_PASS']
    }
}

console.log(credenciaisEmail)

const transporter = nodemailer.createTransport(credenciaisEmail)

const dadosEmail = {
    from: "William Pacheco <blau2@gmail.com>",
    to: "dg2@gmail.com",
    subject: "Oi, este eh um email de teste",
    text: "ola sou teobaldo",
    html: 'ola sou teobando2'

}

transporter.sendMail(dadosEmail).then(message=>{
    console.log(message)
}).catch(error=>{
    console.log(error)
})