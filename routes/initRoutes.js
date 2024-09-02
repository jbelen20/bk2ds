const express = require('express')
const router = express.Router()

const intController = require('../controllers/intController')

router.get('/', intController.list)

module.exports = router;