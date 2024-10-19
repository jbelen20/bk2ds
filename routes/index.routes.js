const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/index.controller.js')

//constrolls
const user = controllerIndex.user
const createUser = controllerIndex.createUser



router.get('/',user);

router.post('/', createUser );

module.exports = router;