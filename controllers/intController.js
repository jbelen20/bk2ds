const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, user) => {
            if(err){
                res.json(err)
              
            }
            res.render('user', {
                data: user
            })
        })
    });
};

module.exports = controller;