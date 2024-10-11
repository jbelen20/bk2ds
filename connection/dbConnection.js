const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'cafeina25',
  database: 'dulceSabor_db'
});

// connection.connect((err) => {
//   if (err) {
//     console.error('Error de conexión: ', err.stack);
//     return;
//   }
//   console.log('¡Conexión exitosa a la base de datos MySQL!');
// });



module.exports = connection;