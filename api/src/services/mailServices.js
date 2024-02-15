const { EMAIL } = process.env;
const transporter = require('../helpers/transporter.js');

const sendEmail = (email, Vcode) => {
    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: 'Verification code',
        text: `Your verification code is ${Vcode}, keep it secret`
    };

    return transporter.sendMail(mailOptions)
}

module.exports = {
    sendEmail,
}