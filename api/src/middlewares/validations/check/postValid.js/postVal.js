const {body} = require('express-validator')

const postCreateValidation = [
    body('title').isLength({min: 1}).isString(),
    body('text').isLength({min: 3}).isString(),
    body('imageUrl').optional().isString(),
    body('videoUrl').optional().isString()
]

module.exports = postCreateValidation