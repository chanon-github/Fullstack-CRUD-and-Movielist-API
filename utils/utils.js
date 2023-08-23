 
 var dbConnect = require('../db/connection')
 var nodemailer = require('nodemailer');



 const checkEmailDuplicate = async (email = null) =>{

    const sqlQueryStr = `   SELECT id  
                            FROM users 
                            where '${email}' = email`

    try{
        let result =  await dbConnect(sqlQueryStr)
        if(result?.length > 0){
            return true
        }else{
            return false
        }
    }catch(err){
        return err;
    }

}
 const checkUsernameDuplicate = async (username = null) =>{

    const sqlQueryStr = `   SELECT id  
                            FROM users 
                            where '${username}' = username`

    try{
        let result =  await dbConnect(sqlQueryStr)
        if(result?.length > 0){
            return true
        }else{
            return false
        }
    }catch(err){
        return err;
    }

}

const sendEmail = async (sendingList=[],subject='',text='') =>{

    // const email = 'chanon.exam@gmail.com'
    // const emailPass = 'zmsznuwummsjnhxu'
    
    const email = 'noreplyemail.mailer@gmail.com'
    const emailPass = 'ttvlrvzwvmueqpar'

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 587,
        host: 'smtp.gmail.com',
        auth: {
            user: email,
            pass: emailPass
          }
      });
      var mailOptions = {
        from: 'NN',
        to: sendingList,
        subject: subject,
        text: text
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        });
      });

    // transporter.sendMail(mailOptions, function(error, info){
    //             if (error) {
    //               console.log(error);
    //             } else {
    //               console.log('Email sent: ' + info.response);
    //             }
    //           });

}

module.exports = {
    checkUsernameDuplicate,
    checkEmailDuplicate,
    sendEmail
}
