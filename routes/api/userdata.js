const express = require("express");
const router = express.Router();

const Userdata = require("../..models/Userdata");


router.route("/")
  .get(Userdata.findAll)
  .post(Userdata.create);

module.exports = router;