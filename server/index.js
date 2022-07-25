const express = require("express");
const app = express()
const wsServer = require("express-ws")(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server work on 5000 port");
})

