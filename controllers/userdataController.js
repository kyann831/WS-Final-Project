const db = require("../models");

// Defining methods for the userdata Controller
module.exports = {
  findAll: function(req, res) {
    db.Userdata.find(req.query)
      .then(dbUserdata => res.json(dbUserdata))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Userdata.findById(req.params.id)
      .then(dbUserdata => res.json(dbUserdata))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Userdata.create(req.body)
      .then(dbUserdata => res.json(dbUserdata))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Userdata.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbUserdata => res.json(dbUserdata))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Userdata.findById(req.params.id)
      .then(dbUserdata => dbUserdata.remove())
      .then(dbUserdata => res.json(dbUserdata))
      .catch(err => res.status(422).json(err));
  }
};
