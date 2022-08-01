const { Schema, model } = require("mongoose");

const Room = Schema({
  roomName: { type: String, required: true },
  roomPassword: { type: String, default: "" },
  users: { type: [String], default: [] }
})

module.exports = model("rooms", Room);