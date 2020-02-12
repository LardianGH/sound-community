const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/signUp"
router.route("/signUp")
  .post(userController.createUser) //pushes the data to ../../controllers/userController and calls createUser
 
 // router.route("/fileupload")
  //.post(userController.sign_s3)

  router.route("/profile-img-upload")
.post(userController.sign_s3)
  module.exports = router;