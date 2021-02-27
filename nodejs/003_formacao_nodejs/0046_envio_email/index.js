const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "c1d3946939b749",
        pass: "984e0538e850e1"
    }
})