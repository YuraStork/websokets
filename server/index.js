const express = require("express");
require("dotenv").config();
const DataBase = require("./db/index");
const router = require("./routes/index");
const app = express();
const wsServer = require("express-ws")(app);
const FileUploader = require("express-fileupload");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const ErrorHandler = require("./middlewares/errorHandler.middleware");

const awss = wsServer.getWss();
wsServer.app.ws("/ws", (ws, req) => {
  ws.onmessage = e => {
    const data = JSON.parse(e.data)
    if(data.method === "connection"){
      awss.clients.forEach(c=>c.send("new user had joined"))
    }
  }
})
wsServer.app.use(cookieParser());
wsServer.app.use(
  cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
  })
);

wsServer.app.use(express.json());
wsServer.app.use(FileUploader({}));
wsServer.app.use("/api", router);
wsServer.app.use(ErrorHandler)

const RunServer = async () => {
  try {
    await DataBase();
    wsServer.app.listen(5000, () => {
      console.log(`server has been work in 5000`);
    });
  } catch (e) {
    console.error(e.message);
  }
};
RunServer();
