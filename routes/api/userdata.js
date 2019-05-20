const express = require("express");
const router = express.Router();

const Userdata = require("../../models/Userdata");

router.post("/update", (req, res) => {
  Userdata.findOne({}).then(userdata => {
    if (!userdata) {
      userdata = new Userdata({
        testscore: req.body.testscore,
        corefive: req.body.corefive,
        otherexercise: req.body.otherexercise
      });
    } else {
      userdata.testscore = req.body.testscore;
      userdata.corefive = req.body.corefive;
      userdata.otherexercise = req.body.otherexercise
    }

    userdata
      .save()
      .then(userdata => res.json(userdata))
      .catch(err => console.log(err));
  });
});

router.post("/get", (req, res) => {
  Userdata.findOne({}).then(userdata => {
    if (!userdata) {
      res.json({
        testscore: "",
        corefive: "",
        otherexercise: ""
      });
    } else {
      res.json({
        testscore: userdata.testscore,
        corefive: userdata.corefive,
        otherexercise: userdata.otherexercise
      });
    }
  });
});


// router.route("/")
//   .get(Userdata.findAll)
//   .post(Userdata.create);

module.exports = router;