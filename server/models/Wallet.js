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
    },{
        freezeTableName: true
    });

    Wallet.associate = (models)=>{
        Wallet.hasMany(models.Transactions, {
            onDelete: "cascade",
            as:'Transactions',
            allowNull: false
        })
        Wallet.belongsTo(models.Users,{
            foreignKey: 'UserId',
            as: 'Users',
            allowNull: false
        })
    }
    
    return Wallet
    }