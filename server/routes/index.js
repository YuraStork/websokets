const { Router } = require("express");
const roomRouter = require("./room.router");
const router = Router();

router.use("/room", roomRouter)

module.exports = router;
