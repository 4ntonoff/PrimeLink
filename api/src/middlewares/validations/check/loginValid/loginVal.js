const {body} = require('express-validator')
const isEmailOrPhone = require('../../helper/isEmailOrPhone.js')

const loginValidation = [
    body('email')
    .custom((value) => isEmailOrPhone(value))
    .withMessage('Invalid email or phone number'),
    body('password').isLength({min: 5})
]

module.exports = loginValidation