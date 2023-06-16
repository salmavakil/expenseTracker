module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define('Users',{
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },{
        freezeTableName: true
    });

    Users.associate = (models)=>{
        Users.hasMany(models.Transactions, {
            onDelete: "cascade",
            foreignKey: 'UserId',
            as: 'Transactions'
        })

    Users.hasMany(models.Wallet, {
            onDelete: "cascade",
            foreignKey: 'UserId',
            as: 'Wallet'
        })

    Users.hasMany(models.Category, {
            onDelete: "cascade",
            foreignKey: 'UserId',
            as: 'Category'
        })
    }
    
    return Users
    }