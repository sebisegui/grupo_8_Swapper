module.exports= (sequelize,DataTypes) =>{
    const producto = sequelize.define(
        'Producto',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            nombre:DataTypes.STRING,
            descripcion:DataTypes.STRING,
            categoria:DataTypes.INTEGER,
            precio:DataTypes.STRING,
            usuario_id:DataTypes.INTEGER,
            foto_portada: DataTypes.STRING
        },
        {
            tableName:'productos',
            timestamps:false}
    );
    producto.associate = function(models){
        producto.hasMany(models.Imagen,{
            as:'imagenes',
            foreignKey:'prod_id',
        });
        producto.belongsToMany(models.Usuario,{
            as:'likes',
            through: 'Like1',
            timestamps:false
        })
        
        producto.belongsTo(models.Categoria,{
            as:'categorias',
            foreignKey:'categoria',
        })
        producto.belongsTo(models.Usuario,{
            as:'usuarios',
            foreignKey:'usuario_id',
        })


    };

    
    return producto

}