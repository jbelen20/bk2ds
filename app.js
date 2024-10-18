
const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended: true }));



const port = 3000
app.listen (port,()=>{
    console.log(`Server on port ${port}`)
})




app.use(require('./routes/index.routes'))






