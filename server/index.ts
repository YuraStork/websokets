import express, { Request, Response, Express } from "express";
import { Instance, WebsocketMethod } from "express-ws";

interface WS extends WebSocket {
  id?: string;
}

const { app, getWss }: Instance = require("express-ws")(express());
const awss = getWss();

const broadcastConnetction = () => {
  return awss.clients.forEach(e => e.send("broadcast"));
};

app.ws("/", (ws) => {
  ws.onmessage = (e) => {
    broadcastConnetction();
  };
});
app.listen(5000, () => {
  console.log("Server working on 5000 port");
});
