const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors());

const db = require('./models');
const usersRouter = require('./Routes/Users');
app.use('/users',usersRouter);
const transactionsRouter = require('./Routes/Transactions');
app.use('/transactions',transactionsRouter);
const walletRouter = require('./Routes/Wallet');
app.use('/wallet',walletRouter);
const categorytRouter = require('./Routes/Category');
app.use('/category',categorytRouter);

db.sequelize.sync().then(()=>{
app.listen(8080,()=>{
    console.log('Server Running...')
})
})

