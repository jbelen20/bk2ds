const connection = require('../connection/dbConnection.js')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


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

    return res.status(201).json({
      id: result.insertId, 
      name, lastname, email, phone, password 
    });
  });
}


//user fin---------------------------------------

//get products-----------------------------------

const productsCategory  = (req,res)=>{
  consultaCategorys = 'SELECT * FROM productsCategory';
  connection.query(consultaCategorys, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      res.status(200).send(resultados);
    }
  )
};

//get a chocolatesProducts
const chocolatesCategory  = (req,res)=>{
  chocolatesCategorysQuery = 'SELECT * FROM chocolates';
  connection.query(chocolatesCategorysQuery, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      res.status(200).send(resultados);
    }
  )
};


const donasCategory  = (req,res)=>{
  donasCategorysQuery = 'SELECT * FROM donas';
  connection.query(donasCategorysQuery, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      res.status(200).send(resultados);
    }
  )
};

const panCategory  = (req,res)=>{
  panCategorysQuery = 'SELECT * FROM pan';
  connection.query(panCategorysQuery, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      console.log(resultados, 'back')
      res.status(200).send(resultados);
    }
  )
};


const tortasCategory  = (req,res)=>{
  tortasCategorysQuery = 'SELECT * FROM tortas';
  connection.query(tortasCategorysQuery, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err.stack);
        return;
      }
      console.log(resultados, 'back')
      res.status(200).send(resultados);
    }
  )
};

const users = [];

const register = async (req, res) => {
  const { username, password } = req.body;

  // Hashear contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.json({ message: "Usuario registrado" });
}


const login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Contraseña incorrecta" });

  // Generar token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
}

function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acceso denegado" });

  try {
      const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
      req.user = verified;
      next();
  } catch (err) {
      res.status(400).json({ error: "Token inválido" });
  }
}
  
  
module.exports = {
  user,
  oneUser,
  createUser,
  productsCategory,
  chocolatesCategory,
  donasCategory,
  panCategory,
  tortasCategory,
  register,
  login,
  verifyToken
};