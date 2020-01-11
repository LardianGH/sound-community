const router = require("express").Router();
const usersRoutes = require("./users");


router.use("/users", usersRoutes); //if using api/users routes to ./users

module.exports = router;