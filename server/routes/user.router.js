const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const router = Router();

router.get("/set", UserController.setUser)

module.exports = router;