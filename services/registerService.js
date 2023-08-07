
var dbConnect = require("../db/connection")
var utils = require('../utils/utils')

module.exports = {
    register: async (req, res) => {
        
        const {username , password , email } = req.body
        const isEmailDuplicate = await utils.checkEmailDuplicate(email)
        const isUsernameDuplicate = await utils.checkUsernameDuplicate(username)
        const sqlQueryStr = `INSERT INTO users 
                                (username, password, email)
                                VALUES('${username}', '${password}', '${email}')`
        
        if(isUsernameDuplicate ){
            
            return res.status(400).send({message:"Username is Duplicate",status_code:400});

        }else if(isEmailDuplicate){
            return res.status(400).send({message:"Email is Duplicate",status_code:400});

        }else{
            try{
                await dbConnect.query(sqlQueryStr)
                return res.status(200).send({message:"Register Success",status_code:200});
            }catch(err){
                return res.status(400).send(err);
            }
        }
             
    },
    get: async (req, res) => {
        
        const sqlQueryStr = `SELECT * from users`
        const result = await dbConnect.query(sqlQueryStr)
        return res.status(200).send({message:"Register Success",status_code:200,result:result});
 
    }
  }