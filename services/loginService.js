
var dbConnect = require("../db/connection")
var moment = require("moment")

module.exports = {
    login: async (req, res) => {
        const {username , password  } = req.body
        const loginQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}' `
        const result =  await dbConnect.query(loginQuery)
        if(result.length>0){
           const updateLoginDateQuery = `UPDATE users
                                            SET  login_date = now()
                                            WHERE username = '${username}'; `
            await dbConnect.query(updateLoginDateQuery)
            return res.status(200).send({message:"Login Successful!",login_date:moment().format('MM-DD-YYYY HH:mm:SS'),status_code:200});
        }else{
            return res.status(400).send({message:"Username or Password incorrect",status_code:400});
        }
        
    }
  }