module.exports = (sequelize,DataTypes)=>{
    const Category = sequelize.define('Category',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    });
    Category.associate = (models)=>{
        Category.hasMany(models.Transactions, {
            onDelete: "cascade"
        })
    }
    
    return Category
    }
