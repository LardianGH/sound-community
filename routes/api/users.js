const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/signUp"
router.route("/signUp")
  .post(userController.createUser) //pushes the data to ../../controllers/userController and calls createUser
 

  module.exports = router;