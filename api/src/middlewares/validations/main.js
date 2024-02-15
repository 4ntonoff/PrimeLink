const { body } = require('express-validator')

const postCreateValidation = [
    body('title').isLength({ min: 1 }).isString(),
    body('text').isLength({ min: 3 }).isString(),
    body('imageUrl').optional().isString(),
    body('videoUrl').optional().isString()
]

const loginValidation = [
    body('email').optional().isEmail().withMessage('Invalid email address'),
    body('username').optional().isString().withMessage('Name must be a string'),
    body('password').isLength({ min: 5 }),
    customValidationMiddleware,
]

function customValidationMiddleware(req, res, next) {

    if (!req.body.username && !req.body.email) {
        return res.status(400).json({ message: 'Name or email is required' });
    }

    next();
}

const registerValidation = [
    body('email').isEmail().isLength({min: 10}).withMessage('Invalid email address'),
]

const codeValidation = [
    body('code').isLength(6).isString()
]

const commentCreateValidation = [
    body('text').isLength({ min: 1 }).isString()
]


module.exports = { postCreateValidation, commentCreateValidation, registerValidation, loginValidation, codeValidation }