const router = require("express").Router();
const room = require("../models/room");

router.post("/create", async (req, res) => {
  try {
    const { name, roomName, roomPassword } = req.body;
    console.log(req.body)
    if (!name || !roomName) throw "error";
    const createdRoom = await room.create({ roomName, roomPassword });
    return res.status(200).json(createdRoom);
  } catch (e) {
    console.error(e);
    return res.status(403).json(e);
  }
});

router.post("/enter", async (req, res) => {
  try {
    const { name, roomId, roomPassword } = req.body;
    console.log(req.body)
    if (!roomId || !name) throw "error";
    const existRoom = await room.findById(roomId);
    if (!existRoom) throw "Not found room";
    const enterInRoom = (existRoom.roomPassword === roomPassword);
    if (!enterInRoom) throw "password";
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

router.get("/check", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params)
    const room = await room.findById(id).select("-__v -roomPassword");
    if (!room) throw "Not found";
    return res.status(200).json(room);
  } catch (e) {
    console.error(e);
    return res.status(403).json(e);
  }
});

module.exports = router;
