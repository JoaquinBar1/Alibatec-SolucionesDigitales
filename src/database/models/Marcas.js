module.exports = function(sequelize, dataTypes){ 
    let alias = 'Marca'; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        tipo: { 
            type: dataTypes.STRING, 
            allowNull: true 
        } 
    } 
    let config = { 
        tableName: 'marcas', 
        timestamps: false 
    } 
    let Marca = sequelize.define(alias, cols, config) 
     
    Marca.associate = function(models) {  
        Marca.hasMany(models.Producto,{ 
            as: "products", 
            foreignKey: "marca_id", 
        }) 
    } 
 
    return Marca; 
}