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
    });

    Users.associate = (models)=>{
        Users.hasMany(models.Transactions, {
            onDelete: "cascade"
        })

    Users.hasMany(models.Wallet, {
            onDelete: "cascade"
        })

    Users.hasMany(models.Category, {
            onDelete: "cascade"
        })
    }
    
    return Users
    }