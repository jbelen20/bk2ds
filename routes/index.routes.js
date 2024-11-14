const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/index.controller.js')

//constrolls
const user = controllerIndex.user
const oneUser = controllerIndex.oneUser
const createUser = controllerIndex.createUser

//get all users
router.get('/',user);
//get one user
router.get("/:id", oneUser)
//post user
router.post('/create', createUser);

module.exports = router;