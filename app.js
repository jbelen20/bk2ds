
const express = require('express')
const morgan = require('morgan')
const app = express()
const controllerObj = require('./controllers/intController.js')


// app.use(morgan('dev'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: true }));


const port = 3000
app.listen (port,()=>{
    console.log(`Server on port ${port}`)
})

const intController = require('./controllers/intController.js')
//console.log(intController.list)

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// const connection = require('./connection/dbConnection.js')

// consultaSQL = 'SELECT * FROM user';
// connection.query(consultaSQL, (err, resultados) => {
//   if (err) {
//     console.error('Error al ejecutar la consulta: ', err.stack);
//     return;
//   }
//   console.log('Resultados de la consulta: ', resultados);
// }
// );


const homeRoutes = require('./routes/initRoutes.js');
app.use('/', homeRoutes)






