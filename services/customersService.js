// var dbConnect = require("../db/service/mysql_client");
const url = require('url');
var dbConnect = require("../db/connection")

module.exports = {
  get: async (req, res) => {
    const id = req.query.id;
    let result = []

    if(id){
      result = await dbConnect(`SELECT * FROM customers WHERE id=${id}`);
    }else{
       result = await dbConnect("SELECT * FROM customers");
    }
    
    res.send(result);
  },
  add: async (req, res) => {
    const { name, address, email, phone, birth_date } = req.body;
    console.log('phone',phone)
    let result = null;
    try {
      result = await dbConnect(
        `INSERT INTO customers (name, address, email, phone, birth_date, create_date, update_date, profile_img) VALUES('${name}', '${address}', '${email}', '${phone}', '${birth_date}', '2008-11-11', '2008-11-11', '')`
      );
      return res.status(200).send({ message: "add success"  , status:200});
    } catch (err) {
      console.log("err>>>>", err);
      return res.status(500).send({ message: "error" });
    }
  },
  update: async (req, res) => {
    const {name,address,email,phone,birth_date,id} = req.body
    console.log("req.body>>>>",req.body)
    let result = null;
    try {
      result = await dbConnect(` UPDATE customers 
                                        SET name='${name}' , address='${address}', email='${email}', phone='${phone}', birth_date='${birth_date}',profile_img='' 
                                        WHERE id=${id};`);
      return res.status(200).send({ message: "update success" , status:200 });
    } catch (err) {
      console.log("err>>>>", err);
      return res.status(500).send({ message: "error" });
    }
  },
  delete: async (req, res) => {
    const { id } = req.body;
    let result = null;
    try {
      result = await dbConnect(` DELETE FROM customers 
     WHERE id=${id};`);
      return res.status(200).send({ message: "delete success" , status:200});
    } catch (err) {
      console.log("err>>>>", err);
      return res.status(500).send({ message: "error" });
    }
  },
};
