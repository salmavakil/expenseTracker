const express = require('express');
const router = express.Router();
const {Users} = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
const {key} = require('../environment');
const {validateToken} = require('../middlewares/authMiddleware');
const Transactions = require('../models/Transactions');

router.post('/',validateToken,async(req,res)=>{
    try{
        const payload = req.body;
        await Transactions.Create(payload);
        res.json({message:'Transaction added successfully'});
    }catch(err){
        res.json({error:err});
    }
})


router.get('/',validateToken,async(req,res)=>{
    try{
        const transactions = await Transactions.find({where: {UserId:req.user.id}});
        if(transactions) res.json(transactions);
    }catch(err){
        if(err) res.json({error:err});
    }
})

router.delete('/',validateToken,async(req,res)=>{
    //todo add logic for updating wallet value
    try{
        await Transactions.destroy({where:{id:req.params.id}});
        res.json({message:'Transaction deleted successfully'});
    }catch(err){
        if(err) res.json({error:err});
    }
})

router.put('/',validateToken,async(req,res)=>{
//todo add logic for updating wallet value
    try{
        const transaction = await Transactions.findOne({ where: { id: req.body.id } });
        if(transaction) {
            await Transactions.update({},{where:{id:req.body.id}});
            res.json({message:'Transaction updated successfully'});
        }
    }catch(err){
        res.json({error:err});
    }

})

module.exports=router;
