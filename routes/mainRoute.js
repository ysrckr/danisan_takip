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


router.route('/login').get(loginController)

router.route('/login').post(loginValidator)

router.route('/register').get(registerController)

router.route('/register').post(registerValidator)

router.route('/').get(homeController)

module.exports = router
