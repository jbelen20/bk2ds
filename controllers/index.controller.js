const connection = require('../connection/dbConnection.js')

const user  = (req,res)=>{

  consultaSQL = 'SELECT * FROM user';
  connection.query(consultaSQL, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      // console.log(resultados)
      res.status(200).send(resultados);
    }
  )
}

  
  
module.exports = {
  user
};