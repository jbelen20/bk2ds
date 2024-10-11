const connection = require('../connection/dbConnection.js')


consultaSQL = 'SELECT * FROM user';
const hola = connection.query(consultaSQL, (err, resultados) => {
  if (err) {
    console.error('Error al ejecutar la consulta: ', err.stack);
    return;
  }
  console.log('Resultados de la consulta: ', resultados);
}
);


module.exports = hola;