var express = require('express');
var router = express.Router();
var loginService = require('../services/loginService')
// var app = express();

  router.post(
    '/',
    loginService.login
  )

module.exports = router;