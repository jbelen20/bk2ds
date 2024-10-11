const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());


const hola = require('../controllers/intController.js');


app.get('/',(req, res) => res.status(200).json({
    hola
}) );

module.exports = router;