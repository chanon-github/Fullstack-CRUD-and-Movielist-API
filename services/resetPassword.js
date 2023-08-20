

var dbConnect = require("../db/connection")


module.exports = {
    resetPassword: async (req, res) => {
        console.log('rrrrrrr')
        const { email ,verifyCode ,password } = req.body

        const getVerifyCode = `SELECT  verify_code
                                FROM users
                                where verify_code = '${verifyCode}'`
        const result = await dbConnect(getVerifyCode)
        if(result?.length>0){

            const updatePasswordQuery = `UPDATE users
            SET  password = '${password}'
            WHERE verify_code = '${verifyCode}' `
            await dbConnect(updatePasswordQuery)

            const deleteResetTokenQuery = `UPDATE users
            SET  verify_code = null
            WHERE verify_code = '${verifyCode}'; `
            dbConnect(deleteResetTokenQuery)

            return res.status(200).send({message:"Password has changed!",status_code:200});


        }else{
            return res.status(400).send({message:"Verify Code Invalid",status_code:400});

        }
       
    }
  }