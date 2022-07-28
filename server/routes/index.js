const { Router } = require("express");
const roomRouter = require("./room.router");
const userRouter = require("./user.router");
const router = Router();

router.use("/room", roomRouter)
router.use("/user", userRouter)

module.exports = router;
