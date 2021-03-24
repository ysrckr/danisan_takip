const express = require('express')
const router = express.Router()
const {
	loginController,
	loginValidator,
} = require('../controllers/loginController')
const {
	registerController,
	registerValidator,
} = require('../controllers/registerController')
const { homeController } = require('../controllers/homeController')
const {
	auth
} = require('../controllers/authController')

router.route('/login').get(loginController)

router.route('/login').post(loginValidator)

router.route('/register').get(registerController)

router.route('/register').post(registerValidator)

router.route('/').get(auth, homeController)

module.exports = router
