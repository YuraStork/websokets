const express = require("express");
const app = express()
const wsServer = require("express-ws")(app);
const aWss = wsServer.getWss();

const PORT = 5000;

const broadcastHandler = (ws, msg) => {
  aWss.clients.forEach((client) => {
    if (client.id === msg.id) {
      client.send(`Користувач з ${msg.userName} підключився`)
    }
  })
}

const connectionHandler = (ws, msg) => {
  ws.id = msg.id;
  broadcastHandler(ws, msg);
}

app.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    const userObject = JSON.parse(msg);
    switch (userObject.method) {
      case "connection": connectionHandler(ws, userObject);
        break;
    }
  })
})

app.listen(PORT, () => {
  console.log("Server work on 5000 port");
})

