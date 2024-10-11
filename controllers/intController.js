
const connection = require('../connection/dbConnection')
const controller = {}


controller.list = (req,res) => {
connection.query((err, conn) => { 
    consultaSQL = 'SELECT * FROM user';
    conn.query(consultaSQL, (err, resultados)=>{
        if(err){
            console.error('Error al ejecutar la consulta: ', err.stack);
            return;
        }
        console.log('Resultados de la consulta: ', resultados);
    })
});
res.json(resultados)

};

module.exports = controller;
