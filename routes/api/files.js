const router = require("express").Router();
const fileController = require("../../controllers/fileController");


router.route("/profile-img-upload")
.post(fileController.sign_s3)

router.route("/profile-img-download")
.post(fileController.download_s3)

router.route("/getFileUploader")
.post(fileController.getFileUploader)

router.route("/getFileUploader2")
  .post(fileController.getFileUploader2)


module.exports = router;