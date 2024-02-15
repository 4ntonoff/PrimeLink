const nodemailer = require('nodemailer')
require('dotenv').config()
const { EMAIL, APP_PASSWORD } = process.env


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: APP_PASSWORD 
    }
})

module.exports = transporter