
const {loginController} = require('../../controllers/userController.js')
const express = require('express');
const router = express.Router();
const validations = require('../../middlewares/validations/check/main.js')
const validationErrors = require('../../middlewares/utils/validationErrors.js')


router.post('/', validations.loginValidator , validationErrors, loginController);

module.exports = router;
