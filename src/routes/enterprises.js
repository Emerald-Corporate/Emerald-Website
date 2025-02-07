var express = require("express");
var router = express.Router();

var enterpriseController = require("../controllers/enterpriseController");

router.post("/authenticate", function (req, res) {
  enterpriseController.authenticate(req, res);
});

router.post("/register", function (req, res) {
  enterpriseController.registerCompany(req, res);
});

module.exports = router;
