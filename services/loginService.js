
var dbConnect = require("../db/connection")
var moment = require("moment")
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


module.exports = {
    login: async (req, res) => {
        const {username , password  } = req.body
        const pwdQuery = `SELECT password FROM users WHERE username = '${username}' `
        const result =  await dbConnect(pwdQuery)
        
        if(result.length>0){
            const correctPwd = bcrypt.compareSync(password, result[0]?.password); // true
            if(correctPwd){
                const updateLoginDateQuery = `UPDATE users
                                                 SET  login_date = now()
                                                 WHERE username = '${username}'; `
                 await dbConnect(updateLoginDateQuery)
                 const token = jwt.sign({ username : username}, 'mysecret', { expiresIn: '1h' });
                 return res.status(200).send({message:"Login Successful!",login_date:moment().format('MM-DD-YYYY HH:mm:SS'),token:token,status_code:200});
             }else{
                 return res.status(400).send({message:"Username or Password incorrect",status_code:400});
             }
        }else{
            return res.status(400).send({message:"Username or Password incorrect",status_code:400});

        }
      
        
    }
  }