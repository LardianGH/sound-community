const db = require("../models");

module.exports = {

createUser: function(req, res) {
    console.log("creating user")
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}

};