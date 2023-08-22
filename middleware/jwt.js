var jwt = require('jsonwebtoken');

module.exports = {
    verifyJwt: async  (req, res,next) => {
        try{
            jwt.verify(req.headers['authorization'].split(' ')[1], 'mysecret');
            next();
        }
        catch{
            
           return res.status(403).send({status:403 ,message:'Invalid Token',isInvalidToken:true});
        }
    }
}