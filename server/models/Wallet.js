module.exports = (sequelize,DataTypes)=>{
    const Wallet = sequelize.define('Wallet',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalBalance: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    RemainingBalance: {
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    });

    Wallet.associate = (models)=>{
        Wallet.hasMany(models.Transactions, {
            onDelete: "cascade"
        })
    }
    
    return Wallet
    }