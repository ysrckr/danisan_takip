const express = require('express')
const router = express.Router()
const { loginController } = require('../controllers/loginController')
const { registerController } = require('../controllers/registerController')

router.route('/login').get(loginController)

router.route('/register').get(registerController)

module.exports = router
