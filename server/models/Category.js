module.exports = (sequelize,DataTypes)=>{
    const Category = sequelize.define('Category',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },{
        freezeTableName: true
    });
    Category.associate = (models)=>{
        Category.hasMany(models.Transactions, {
            onDelete: "cascade",
            as: 'Transactions',
            allowNull: false
        })
        Category.belongsTo(models.Users,{
            foreignKey: 'UserId',
            as: 'Users',
            allowNull: false
        })
    }
    
    return Category
    }
