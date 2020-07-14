const DB = require('../database/models')
const OP = DB.Sequelize.Op

module.exports = {
    index: (req, res)=>{
        DB.sequelize.query('SELECT * FROM productos')
        .then((resultado)=> {
            res.send(resultado)
        })
        .catch((error)=>{
            res.send(error)
        })
    }
}