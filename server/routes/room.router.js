const router = require("express").Router();
const ApiError = require("../errorClass");
const room = require("../models/room");

router.post("/create", async (req, res, next) => {
  try {
    const { userId } = req.cookies;
    const { name, roomName, roomPassword } = req.body;
    if (!name || !roomName)
      return next(ApiError.badRequest("Invalid data in request"));
    const createdRoom = await room.create({
      roomName,
      roomPassword,
      users: [userId],
    });
    return res.status(200).json(createdRoom);
  } catch (e) {
    return next(e);
  }
});

router.post("/enter", async (req, res, next) => {
  try {
    const { userId } = req.cookies;
    const { name, roomId, roomPassword = "" } = req.body;
    if (!roomId || !name)
      return next(ApiError.badRequest("Invalid data in request"));
    const existRoom = await room.findById(roomId);
    if (!existRoom) return next(ApiError.notFound("Not found room"));
    const equilPassword = existRoom.roomPassword === roomPassword;
    if (!equilPassword) return next(ApiError.forbidden("Invalid password"));
    const userInRoom = existRoom.users.find((user) => user === userId);
    if (!userInRoom) {
      await room.findOneAndUpdate(
        { _id: roomId },
        {
          $push: { users: userId },
        }
      );
    }
    return res.status(200).json(existRoom);
  } catch (e) {
    return next(e);
  }
});

router.get("/all", async (req, res, next) => {
  try {
    const rooms = await room.find().select("-__v -roomPassword");
    return res.status(200).json(rooms);
  } catch (e) {
    return next(e);
  }
});

router.get("/check/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.cookies;
    const existRoom = await room.findById(id).select("-__v -roomPassword");
    if (!existRoom) return next(ApiError.notFound("Not found room"));
    const userInRoom = existRoom.users.find((e) => e === userId);
    if (!userInRoom) return next(ApiError.forbidden("Not access"));
    return res.status(200).json(existRoom);
  } catch (e) {
    return next(e);
  }
});

router.post("/checkRoomPassword/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { password = "", name } = req.body;
    const { userId } = req.cookies;
    const existRoom = await room.findById(id).select("-__v");
    if (!existRoom) return next(ApiError.notFound("Not found room"));
    const checkPassword = existRoom.roomPassword === password;
    if (!checkPassword) return next(ApiError.forbidden("Invalid password"));
    await room.findOneAndUpdate({ _id: id }, { $push: { users: userId } });
    return res.status(200).json();
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
