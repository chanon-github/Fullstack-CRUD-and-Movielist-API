
var dbConnect = require("../db/connection")
require("dotenv").config();
const { API_KEY, API_GETMOVIE_DOMAIN, DB_USERNAME, DB_PORT, DB_NAME } = process.env;
module.exports = {
  get: async (req, res) => {
    const id = req.query.id;
    // let result = []

    if(id){
        const response = await fetch(`${API_GETMOVIE_DOMAIN}/${id}?api_key=${API_KEY}`)
        const result = await response.json(); 
        res.send(result)
    }else{
        const response = await fetch(`${API_GETMOVIE_DOMAIN}/now_playing?api_key=${API_KEY}`)
        const result = await response.json(); 
        res.send(result)
    }

  }
};
