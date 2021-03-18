const express = require('express')
const router = express.Router()

const { clientController } = require('../controllers/clientController')
const { newClient } = require('../controllers/newClientController')

router.route('/new').get(newClient)

router.route('/:id').get(clientController)

module.exports = router
