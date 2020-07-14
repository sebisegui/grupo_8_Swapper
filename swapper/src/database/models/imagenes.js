module.exports= (sequelize,DataTypes) =>{
    const imagen = sequelize.define(
        'Imagen',
        {
            imagenes:DataTypes.STRING,
            prod_id:DataTypes.INTEGER,
        },
        {
            tableName:'imagenes',
            timestamps:false}
    );
    imagen.associate = function(models){
      imagen.belongsTo(models.Producto,{
        as:'productos',
        foreignKey:'prod_id',
    })
}
    return imagen

}