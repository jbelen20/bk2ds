const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/index.controller.js')

//constrolls
const user = controllerIndex.user
const oneUser = controllerIndex.oneUser
const createUser = controllerIndex.createUser
const productsCategory = controllerIndex.productsCategory

//get all users
router.get('/users',user);
//get one user
router.get("/users/:id", oneUser)
//post user
router.post('/create', createUser);

//get productsCategory
router.get('/categorys', productsCategory);

//get aProduct

module.exports = router;