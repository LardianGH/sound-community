const db = require("../models");
var aws = require('aws-sdk'); 
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );

require('dotenv').config(); // Configure dotenv to load in the .env file




module.exports = {

findCookie: function(req, res) {
  if(req.session.userName) {
      res.json(req.session)
  }
  else {
    console.log("no username saved")
  }
    },

createUser: function(req, res) {
  console.log("req.hey")
  console.log(req.body)

    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},

findUser: function(req, res) {
  console.log("Session: ___l")
  const response = {session: req.session}
  console.log(req.body)
  console.log(req.body.userName)
  console.log(req.body.password)
  console.log(req.session)
  db.User
    .find({userName: req.body.userName, password: req.body.password})
    .sort({ date: -1 })
    .then(dbModel => {
    response.dbModel = dbModel,
    req.session.userName = response.dbModel[0].userName,
    req.session.email = response.dbModel[0].email,
    req.session._id = response.dbModel[0]._id,
    res.json(response);
  }).catch(err => res.status(422).json(err));
},


};