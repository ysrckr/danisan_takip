const express = require('express')
const router = express.Router()
const {auth} = require('../controllers/authController')
const { clientController } = require('../controllers/clientController')
const { newClient } = require('../controllers/newClientController')

router.route('/new').get(auth, newClient)

router.route('/:id').get(auth, clientController)

module.exports = router
