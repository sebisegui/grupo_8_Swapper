const DB = require('../database/models')
const OP = DB.Sequelize.Op

module.exports = {
    index: async (req, res)=>{
        const usuarios = await DB.Usuario.findAll({
            include:['codPost']
        })
        res.send(usuarios)
    }
}