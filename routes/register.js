var express = require('express');
var router = express.Router();
var registerService = require('../services/registerService')
// var loginService = require('../services/login_service')
// var app = express();

  router.post(
    '/',
    registerService.register
  )
  router.get(
    '/get',
    registerService.get
  )

module.exports = router;