
var dbConnect = require("../db/connection")
require("dotenv").config();
const { API_KEY, API_GETMOVIE_DOMAIN } = process.env;
module.exports = {
  get: async (req, res) => {
    const id = req.query.id;
    const page = req.query.page;
    if(id){
        const response = await fetch(`${API_GETMOVIE_DOMAIN}/${id}?api_key=${API_KEY}`)
        const result = await response.json(); 
        res.send(result)
    }else{
        const response = await fetch(`${API_GETMOVIE_DOMAIN}/now_playing?api_key=${API_KEY}&page=${page}`)
        const result = await response.json(); 
        res.send(result)
    }

  }
};
