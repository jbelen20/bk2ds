const connection = require('../connection/dbConnection.js')


//user---------------------------------------



// get users
const user  = (req,res)=>{
  consultaSQL = 'SELECT * FROM user';
  connection.query(consultaSQL, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      res.status(200).send(resultados);
    }
  )
};



// get a user
const oneUser = async (req, res)=>{
  const userId = req.params.id
  const consultaUser = 'SELECT * FROM user WHERE id = ?'
  connection.query(consultaUser,[userId], (err, results) => {
    if (err) {
      return res.status(500).send('Error en la consulta de la base de datos');
    }
    if (results.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }

    return res.json(results[0]);
  }
)

}



// post user
const createUser = (req, res)=>{
  const { name, lastname, email, phone, password } = req.body;
 
  const queryCreateUser = 'INSERT INTO user (name, lastname, email, phone, password) VALUES (?, ?, ?, ?, ?)'
 
  connection.query(queryCreateUser, [name, lastname, email, phone, password ], (err, result) => {
    if (err) {
      console.error('Error al insertar el usuario:', err);
      return res.status(500).send('Error al insertar el usuario');
    }

    res.status(201).json({
      id: result.insertId, 
      name, lastname, email, phone, password 
    });
  });
}


//user fin---------------------------------------

  
  
module.exports = {
  user,
  oneUser,
  createUser
};