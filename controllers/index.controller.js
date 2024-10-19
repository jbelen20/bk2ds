const connection = require('../connection/dbConnection.js')


// get users
const user  = (req,res)=>{
  consultaSQL = 'SELECT * FROM user';
  connection.query(consultaSQL, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      console.log(req.params)
      res.status(200).send(resultados);
    }
  )
}

// get a user

// post user

const createUser = (req, res)=>{
  res.send('buliding user is loading...')
}


  
  
module.exports = {
  user,
  createUser
};