var express = require('express');
var router = express.Router();
var sendTokenService = require('../services/sendTokenService')
// var app = express();

  router.post(
    '/',
    sendTokenService.sendToken
  )

module.exports = router;