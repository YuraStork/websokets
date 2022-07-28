const router = require("express").Router();
const room = require("../models/room");

router.post("/create", async (req, res) => {
  try {
    const {userId} = req.cookies;
    const { name, roomName, roomPassword } = req.body;
    console.log(req.body)
    if (!name || !roomName) throw "error";
    const createdRoom = await room.create({ roomName, roomPassword, users: [userId] });
    return res.status(200).json(createdRoom);
  } catch (e) {
    console.error(e);
    return res.status(403).json(e);
  }
});

router.post("/enter", async (req, res) => {
  try {
    const { userId } = req.cookies;
    const { name, roomId, roomPassword = "" } = req.body;

    if (!roomId || !name) throw "error";
    const existRoom = await room.findById(roomId);
    if (!existRoom) throw "Not found room";
    const enterInRoom = (existRoom.roomPassword === roomPassword);
    if (!enterInRoom) throw "password";
    await room.findOneAndUpdate({ _id: roomId }, {
      $push: { users: userId }
    })
    return res.status(200).json(existRoom);
  } catch (e) {
    console.error(e);
    return res.status(403).json(e);
  }
});

router.get("/all", async (req, res) => {
  try {
    const rooms = await room.find().select("-__v -roomPassword");
    return res.status(200).json(rooms);
  } catch (e) {
    console.error(e);
    return res.status(403).json(e);
  }
});

router.get("/check/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID", id)
    const { userId } = req.cookies;
    console.log("userId", userId)
    const existRoom = await room.findById(id).select("-__v -roomPassword");
    if (!existRoom) throw "Not found";

    console.log(existRoom.users)
    const userInRoom = existRoom.users.find((e) => e === userId);
    console.log("userInRoom", userInRoom)

    if (!userInRoom) {
      return res.status(400).json({ "message": "password" });
    }
    return res.status(200).json(existRoom);

  } catch (e) {
    console.error(e);
    return res.status(403).json(e);
  }
});


router.post("/checkRoomPassword/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { password = "", name } = req.body;
    const { userId } = req.cookies;
    const existRoom = await room.findById(id).select("-__v");
    if (!existRoom) throw "Not found";

    const checkPassword = (existRoom.roomPassword === password);
    console.log(checkPassword);

    if (!checkPassword) {
      throw "Not valid password";
    }

    await room.findOneAndUpdate(
      { _id: id },
      { $push: { users: userId } },
    );

    return res.status(200).json();
  } catch (e) {
    console.error(e);
    return res.status(403).json(e);
  }
});



module.exports = router;
