const router = require("express").Router();
const usersRoutes = require("./users");
const filesRoutes = require("./files")


router.use("/users", usersRoutes); //if using api/users routes to ./users

router.use("/files", filesRoutes); //if using api/users routes to ./users

module.exports = router;