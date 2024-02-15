const express = require('express')
const router = express.Router()
const passport = require('passport')
const validations = require("../middlewares/validations/main.js");
const validationErrors = require("../middlewares/utils/validationErrors.js");
const loginController = require("../controllers/auth/login.js");
const registerController = require("../controllers/auth/register.js");
const verifyCode = require('../controllers/auth/verify-code.js');
const checkAuth = require('../middlewares/utils/checkAuth.js');
const setPassword = require('../controllers/auth/set-password.js');
const jwt = require('jsonwebtoken')
const {SECRET_KEY_JWT} = process.env
require('dotenv').config()
// const { sendOTP, verifyOTP } = require('../controllers/sms.js');


router.post(
    "/login",
    validations.loginValidation,
    validationErrors,
    loginController
);

router.post(
    "/register",
    validations.registerValidation,
    validationErrors,
    registerController
);

router.post(
    "/verify-code",
    validations.codeValidation,
    verifyCode
)

router.post(
    "/set-password",
    checkAuth,
    setPassword
)

//* SMS routes
// router.post(
//     "/send-otp",
//     sendOTP
// )

// router.post(
//     "/verify-otp",
//     verifyOTP
// )


router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}))

router.get('/google/callback',
  passport.authenticate('google'), // complete the authenticate using the google strategy
  (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
    if (err.name === 'TokenError') {
     res.redirect('/auth/google'); // redirect them back to the login page
    } else {
     // Handle other errors here
    }
  },
  (req, res) => { // On success, redirect back to '/'
    res.redirect('/main');
  }
);

module.exports = router