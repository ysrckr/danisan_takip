const express = require('express')
const router = express.Router()

const {clientController} = require('../controllers/clientController')

router.route('/:id').get(clientController)

module.exports = router