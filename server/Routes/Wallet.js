const express = require('express');
const router = express.Router();
const {Users} = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
const {key} = require('../environment');
const {validateToken} = require('../middlewares/authMiddleware');
const Wallet = require('../models/Wallet');


router.get('/',validateToken, async(req,res)=>{
    try{
        const wallets = await Wallet.find({where:{UserId:req.user.id}});
        if(wallets) res.json({wallets})
    }catch(err){
        if(err) res.json({error:err})
    }
    
})

router.post('/',validateToken,async(req,res)=>{
    try{
        await Wallet.Create(req.body);
        res.json({message:'Wallet added successfully'})
    }catch(err){
        if(err) res.json({error:err});
    }
})

router.put('/',validateToken, async (req,res)=>{
    //todo add logic to update balance in wallet
    try{
        const payload = req.body;
        await Wallet.update({},{where:{id:req.body.id}});
        res.json({message:'Wallet updated successfully'})
    }catch(err){
        if(err) res.json({error:err});
    }
})

router.delete('/',validateToken, async(req,res)=>{
    try{
        await Wallet.delete({where:{id:req.params.id}});
        res.json({message:'Wallet deleted successfully'});
    }catch(err){
        res.json({error:err});
    }
})

module.exports=router;