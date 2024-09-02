const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const app = express()



app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }));


const port = 3000
app.listen (port,()=>{
    console.log('Server on port 3000')
})


app.use(myConnection(mysql,{
    host:'localhost',
    user: 'root',
    password:'cafeina25',
    port:'3306',
    database: 'dulceSabor_db'
},'single'));



const homeRoutes = require('./routes/initRoutes')
app.use('/', homeRoutes)