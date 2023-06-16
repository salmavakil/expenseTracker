module.exports = (sequelize,DataTypes)=>{
    const Transactions = sequelize.define('Transactions',{
    type: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull:false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:true
    }
    },{
        freezeTableName: true
    });

    Transactions.associate = (models)=>{
        Transactions.belongsTo(models.Users,{
            foreignKey: 'UserId',
            as: 'Users'
        })
        Transactions.belongsTo(models.Wallet,{
            foreignKey: 'WalletId',
            as: 'Wallet'
        })
        Transactions.belongsTo(models.Category,{
            foreignKey: 'CategoryId',
            as: 'Category'
        })
    }
    
    return Transactions
    }