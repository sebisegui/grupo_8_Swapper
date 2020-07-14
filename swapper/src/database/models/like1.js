module.exports= (sequelize,DataTypes) =>{
    const like1 = sequelize.define(
        'Like1',
        {
            usuario_id:DataTypes.INTEGER,
            producto_id:DataTypes.INTEGER,
            like:DataTypes.TINYINT,
        },
        {
            tableName:'like1',
            timestamps:false}
    );
    return like1

}