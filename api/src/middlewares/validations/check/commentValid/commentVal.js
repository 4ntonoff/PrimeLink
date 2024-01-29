const { body } = require('express-validator')

const commentCreateValidation = [
    body('text').isLength({ min: 1 }).isString()
]

module.exports = commentCreateValidation