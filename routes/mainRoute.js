const express = require('express')
const router = express.Router()
const { loginController } = require('../controllers/loginController')
const { registerController } = require('../controllers/registerController')
const { homeController } = require('../controllers/homeController')

router.route('/login').get(loginController)

router.route('/register').get(registerController)

router.route('/').get(homeController)

module.exports = router
