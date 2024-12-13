const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/index.controller.js')

//constrolls
const user = controllerIndex.user
const oneUser = controllerIndex.oneUser
const createUser = controllerIndex.createUser
const productsCategory = controllerIndex.productsCategory
const chocolatesCategory = controllerIndex.chocolatesCategory
const donasCategory = controllerIndex.donasCategory 
const panCategory = controllerIndex.panCategory 
const tortasCategory = controllerIndex.tortasCategory 


//get all users
router.get('/users',user);
//get one user
router.get("/users/:id", oneUser)
//post user
router.post('/create', createUser);

//get productsCategory
router.get('/categorys', productsCategory);
//get aProduct 
router.get('/categorys/chocolates', chocolatesCategory);
router.get('/categorys/donas', donasCategory);
router.get('/categorys/pan', panCategory);
router.get('/categorys/tortas', tortasCategory);

module.exports = router;