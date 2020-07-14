module.exports= (sequelize,DataTypes) =>{
    const categoria = sequelize.define(
        'Categoria',
        {
            nombre:DataTypes.STRING,
        },
        {
            tableName:'categoria',
            timestamps:false}
    );
    categoria.associate = function(models){
        categoria.hasMany(models.Producto,{
            as:'productos',
            foreignKey:'categoria',
        })

    }
    return categoria

}