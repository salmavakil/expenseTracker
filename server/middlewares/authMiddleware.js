const {verify} = require('jsonwebtoken')
const {key} = require('../environment');

const validateToken = (req,res,next) => {
const accessToken = req.header("Accesstoken");
if(!accessToken) return res.json({error: 'Unauthorized'})
try {
    const validToken = verify(accessToken, key);
    req.user = {token:accessToken, username:validToken.data.username, id:validToken.data.id};
    if(validToken){
        return next();
    }
} catch (err) {
    res.json({error:err})
}
}

module.exports = {validateToken};