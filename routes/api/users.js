const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/signUp"
router.route("/signUp")
  .post(userController.createUser) //pushes the data to ../../controllers/userController and calls createUser

  // Matches with "/api/users/login"
router.route("/login")
.post(userController.findUser)
 
 // router.route("/fileupload")
  //.post(userController.sign_s3)

  router.route("/cookie")
  .get(userController.findCookie)

  router.route("/profile-img-upload")
.post(userController.sign_s3)

router.route("/profile-img-download")
.post(userController.download_s3)

  module.exports = router;