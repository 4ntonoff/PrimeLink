const registerValidator = require('./registerValid/registerVal.js')
const postValidator = require('./postValid.js/postVal.js')
const loginValidator = require('./loginValid/loginVal.js')
const commentValidator = require('./commentValid/commentVal.js')

module.exports = {
    registerValidator,
    postValidator,
    loginValidator,
    commentValidator
}