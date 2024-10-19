
const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
const cors = require('cors');
app.use(cors());


const port = 3000
app.listen (port,()=>{
    console.log(`Server on port ${port}`)
})



app.use(require('./routes/index.routes'))






