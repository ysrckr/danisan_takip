const express = require('express')
const router = express.Router()
const {auth} = require('../controllers/authController')
const { clientController } = require('../controllers/clientController')
const { newClient, newClientSave} = require('../controllers/newClientController')

router.route('/new').get(auth, newClient)
router.route('/new').post(auth, newClientSave)

router.route('/:id').get(auth, clientController)

module.exports = router
