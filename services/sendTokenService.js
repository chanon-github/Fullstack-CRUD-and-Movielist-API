

var dbConnect = require("../db/connection")
var utils = require('../utils/utils')

module.exports = {
    sendToken: async (req, res) => {
        const { email  } = req.body
        const isEmailDuplicate = await utils.checkEmailDuplicate(email)
        
        if(isEmailDuplicate){
            const resetToken = Math.floor(Math.random() * 1000000000) ;

            const setResetTokenQuery = `UPDATE users
            SET  verify_code = '${resetToken}'
            WHERE email = '${email}'; `

            const deleteResetTokenQuery = `UPDATE users
            SET  verify_code = null
            WHERE email = '${email}'; `

            await dbConnect(setResetTokenQuery)

            try {
                // await utils.sendEmail([email],'Reset Your Password',`Verify Code For Reset Your Password : ${resetToken} This code is expire in 5 minutes`)
                await utils.sendEmail([email],'Reset Your Password',`Verify Code For Reset Your Password : ${resetToken} `)

                setTimeout(() => {
                    console.log('remove token email>>',email)
                    dbConnect(deleteResetTokenQuery)
                  }, 300000);
                return res.status(200).send({message:"Send Token to your email",status_code:200});
                
              } catch (err) {
                console.log('err>>>',err)
                return res.status(400).send({message:"Email not found"+err,status_code:400});

              }

          
            // setTimeout(() => {
            //     console.log('remove token email>>',email)
            //     dbConnect(deleteResetTokenQuery)
            //   }, 300000);
      
            
            // return res.status(200).send({message:"Send Token to your email",status_code:200});
        }else{
            return res.status(400).send({message:"Email not found",status_code:400});
        }
    }
  }