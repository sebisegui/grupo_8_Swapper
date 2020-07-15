module.exports= (sequelize,DataTypes) =>{
    const usuario = sequelize.define(
        'Usuario',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            nombre:DataTypes.STRING,
            username:DataTypes.STRING,
            Email:DataTypes.STRING,
            contraseña:DataTypes.STRING,
            telefono:DataTypes.STRING,
            avatar:DataTypes.STRING,
            codigo_postal:DataTypes.INTEGER,
        },
        {
            tableName:'usuarios',
            timestamps:false}
    );

    usuario.associate = function(models){
        usuario.hasMany(models.Producto,{
            as:'productos',
            foreignKey:'usuario_id',
        });
        usuario.belongsToMany(models.Producto,{
            as:'likes',
            through: 'like1',
            foreignKey: 'usuario_id',
            otherKey:'producto_id',
            timestamps:false
        })
        usuario.belongsTo(models.CodPostal,{
            as:'codPost',
            foreignKey:'codigo_postal',
        })
    
            
    };
    return usuario

}