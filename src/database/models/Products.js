module.exports = function (sequelize, dataTypes){ 
    let alias = 'Producto'; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoincrement: true 
        }, 
        marca_id: { 
            type: dataTypes.INTEGER, 
        }, 
        model: { 
            type: dataTypes.STRING, 
        }, 
        price: { 
            type: dataTypes.DECIMAL, 
        }, 
        discount: { 
            type: dataTypes.DECIMAL 
        }, 
        detail: { 
            type: dataTypes.STRING, 
        }, 
        estado: { 
            type: dataTypes.STRING, 
        }, 
        categoria_id: {
            type: dataTypes.INTEGER
        },
    }  
    let config = { 
        tableName: 'products', 
        timestamps: false 
    } 
    let Producto = sequelize.define(alias, cols, config) 
 
    Producto.associate = function(models) { 
        Producto.belongsToMany(models.Usuarios,{ 
            as: "usuarios", 
            through: "user_product", 
            foreignKey: "product_id", 
            otherKey:"user_id", 
            timestamps:false 
        }) 
        Producto.belongsTo(models.Marca,{ 
            as: "marca", 
            foreignKey: "marca_id",  
        }) 
        Producto.belongsTo(models.Category, { 
            as: "category", 
            foreignKey:"categoria_id" 
        }) 
        Producto.belongsToMany(models.Image,{ 
            as: "image", 
            through: "image_product",
            foreignKey: "id", 
            otherKey: "image_id",
            timestamps: false
        }) 
    } 
 
    return Producto;  
}