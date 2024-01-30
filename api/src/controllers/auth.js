const express = require('express')
const registerController =
    require("./register.js");
const router = express.Router()
const validations = require("../middlewares/validations/check/main.js");
const validationErrors = require("../middlewares/utils/validationErrors.js");
const loginController = require("./login.js");


router.post(
    "/login",
    validations.loginValidator,
    validationErrors,
    loginController,
);

router.post(
    "/register",
    validations.registerValidator,
    validationErrors,
    registerController,
);

module.exports = router