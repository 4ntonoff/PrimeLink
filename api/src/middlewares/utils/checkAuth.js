const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.SECRET_KEY_JWT

const checkAuth = (req,res,next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if(token) {
        try {
            const decoded = jwt.verify(token,secret)

            req.userId = decoded._id
            next()
        } catch (error) {
            return res.status(403).json({
                message: "Log into your account"
            })
        }
    } else {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = checkAuth