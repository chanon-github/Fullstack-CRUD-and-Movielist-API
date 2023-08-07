var express = require('express');
var router = express.Router();
var resetPasswordService = require('../services/resetPassword')
// var loginService = require('../services/login_service')
// var app = express();

  router.put(
    '/',
    resetPasswordService.resetPassword
  )

module.exports = router;