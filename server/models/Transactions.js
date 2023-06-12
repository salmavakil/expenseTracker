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
    });
    
    return Transactions
    }