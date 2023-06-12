const express = require('express');
const router = express.Router();
const {Users} = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
const {key} = require('../environment');
const {validateToken} = require('../middlewares/authMiddleware');


router.post('/register',async (req,res)=>{
    const payload = req.body;
    const user = await Users.findOne({where: {username: payload.username}});
    if(user){
        res.json({error:'User already exists!'});
    }
    bcrypt.hash(payload.password, 10).then(async (response)=>{
        try{
        await Users.create({username:payload.username, password:response});
        res.json({message:'User created successfully'});
        }catch (err){
            res.json({error:err});
        }
    })
})

router.post('/login',async (req,res)=>{
    const payload = req.body;
    const user = await Users.findOne({where: {username: payload.username}});
    if(!user){
        res.json({error:'User does not exist!'});
        res.status = 404;
    }
        bcrypt.compare(payload.password, user.password).then(async (response)=>{
            if(!response) res.json('Wrong username and password combination!');
            const accessToken = sign({data:{username:user.username, id:user.id},exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 10)}, key );
            res.json({token:accessToken,username:user.username,id:user.id})
        })
    })

router.get("/authenticate",validateToken, async (req,res)=>{
        res.json(req.user);
        })

module.exports=router;