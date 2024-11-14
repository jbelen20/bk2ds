
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('node:http')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());
app.use(bodyParser.json());

const port = 3000
app.listen (port,()=>{
    console.log(`Server on port ${port}`)
})


app.use(require('./routes/index.routes'))






