var express = require('express');
var dbConnect = require("../db/connection")
var app = express();
var registerRouter = require("./register")
var loginRouter = require("./login")
var sendTokenRouter = require("./sendToken")
var resetPasswordRouter = require("./resetPassword")
var customerRouter = require('./customers');
var movieRouter = require('./movie');


app.use('/register', registerRouter);
app.use('/login', loginRouter); 
app.use('/send-token', sendTokenRouter); 
app.use('/reset-password', resetPasswordRouter); 
app.use('/customers', customerRouter);
app.use('/movie', movieRouter);



module.exports = app;
