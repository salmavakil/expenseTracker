const express = require('express');
const router = express.Router();
const {Users} = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
const {key} = require('../environment');
const {validateToken} = require('../middlewares/authMiddleware');
const Category = require('../models/Category');


router.get('/',validateToken, async(req,res)=>{
    try{
        const category = await Category.find({where:{UserId:req.user.id}});
        if(category) res.json({category})
    }catch(err){
        if(err) res.json({error:err})
    }
    
})

router.post('/',validateToken,async(req,res)=>{
    try{
        const payload = {name:req.body.name,UserId:req.user.id}
        await Category.create(payload);
        res.json({message:'Category added successfully'})
    }catch(err){
        if(err) res.json({error:err});
    }
})

router.put('/',validateToken, async (req,res)=>{
    try{
        const payload = req.body;
        await Category.update({name:payload.name},{where:{id:req.body.id}});
        res.json({message:'Category updated successfully'})
    }catch(err){
        if(err) res.json({error:err});
    }
})

router.delete('/',validateToken, async(req,res)=>{
    try{
        await Category.delete({where:{id:req.params.id}});
        res.json({message:'Category deleted successfully'});
    }catch(err){
        res.json({error:err});
    }
})

module.exports=router;