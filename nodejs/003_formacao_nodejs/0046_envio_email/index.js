const nodemailer = require('nodemailer')

// const credenciaisEmail = {
//     host: process.env['MAIL_MAILTRAP_HOST'],
//     port: process.env['MAIL_MAILTRAP_PORT'],
//     auth: {
//         user: process.env['MAIL_MAILTRAP_USER'],
//         pass: process.env['MAIL_MAILTRAP_PASS']
//     }
// }

const credenciaisEmail = {
    host: process.env['MAIL_GMAIL_HOST_SMTP'],
    port: process.env['MAIL_GMAIL_PORT_SMTP'],
    auth: {
        user: process.env['MAIL_GMAIL_USER'],
        pass: process.env['MAIL_GMAIL_PASS']
    }
}


console.log(credenciaisEmail)

const transporter = nodemailer.createTransport(credenciaisEmail)

const dadosEmail = {
    from: "William Pacheco <blau2@gmail.com>",
    to: "blau@gmail.com, blau2@gmail.com",
    subject: "Oi, este eh um email de teste",
    text: "ola sou nodeman",
    html: 'ola sou nodeman2'

}

transporter.sendMail(dadosEmail).then(message=>{
    console.log(message)
}).catch(error=>{
    console.log(error)
})