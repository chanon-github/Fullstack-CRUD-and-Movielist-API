var express = require("express");
var router = express.Router();
var movieService = require('../services/movieService')

var verifyJwt = require('../middleware/jwt')


router.get(
    '/',
    // verifyJwt.verifyJwt,
    movieService.get
)


module.exports = router;
