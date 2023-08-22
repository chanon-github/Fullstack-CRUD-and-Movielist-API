var express = require("express");
var router = express.Router();
var customersService = require('../services/customersService')

var verifyJwt = require('../middleware/jwt')


router.get(
    '/',
    verifyJwt.verifyJwt,
    customersService.get
)

router.post(
    '/',
    verifyJwt.verifyJwt,
    customersService.add
)


router.patch(
    '/',
    verifyJwt.verifyJwt,
    customersService.update
)


router.delete(
    '/',
    verifyJwt.verifyJwt,
    customersService.delete
)



// router.get("/", function (req, res, next) {
//   res.send("retrive all");
// });

// router.post("/", function (req, res, next) {
//   res.send("Add");
// });

// router.patch("/", function (req, res, next) {
//   res.send("Update");
// });

// router.delete("/", function (req, res, next) {
//   res.send("Delete");
// });

module.exports = router;
