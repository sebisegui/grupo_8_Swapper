module.exports= (sequelize,DataTypes) =>{
    const codPostal = sequelize.define(
        'CodPostal',
        {
            numero:DataTypes.INTEGER,
            localidad:DataTypes.STRING,
        },
        {
            tableName:'codigo_postal',
            timestamps:false
        }
    );
    codPostal.associate = function(models){
        codPostal.hasMany(models.Usuario,{
            as:'usuarios',
            foreignKey:'codigo_postal',
        })

    }
    return codPostal

}