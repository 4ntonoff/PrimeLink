const {body} = require('express-validator')
const isEmailOrPhone = require('../../helper/isEmailOrPhone.js')

const registerValidation = [
    body('email')
    .custom((value) => isEmailOrPhone(value))
    .withMessage('Invalid email or phone number'),
    body('password').isLength({min: 5}),
    body('name').isLength({min:3}),
    body('avatarUrl').optional().isURL()
]

module.exports = registerValidation