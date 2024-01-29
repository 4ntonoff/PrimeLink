
const { registerController } = require('../../controllers/userController.js')
const express = require('express');
const router = express.Router();
const validations = require('../../middlewares/validations/check/main.js')
const validationErrors = require('../../middlewares/utils/validationErrors.js')


router.post('/', validations.registerValidator, validationErrors, registerController);

module.exports = router;