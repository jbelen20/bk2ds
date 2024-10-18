const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/index.controller.js')
const user = controllerIndex.user


router.get('/', user ,(req, res) => {
 res.send('hola')
});

module.exports = router;