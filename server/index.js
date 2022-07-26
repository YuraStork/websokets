const express = require("express");
require("dotenv").config();
const DataBase = require("./db/index");
const router = require("./routes/index");
const app = express();
const wsServer = require("express-ws")(app);
const FileUploader = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middlewares/errorHandler.middleware");

const awss = wsServer.getWss();
const PORT = process.env.PORT || 80;

wsServer.app.ws("/ws", (ws, req) => {
  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    console.log("DATA", data);
    switch (data.method) {
      case "connection":
        ws.id = data.id;
        awss.clients.forEach((c) => {
          if (c.id === data.id) {
            c.send(JSON.stringify({ method: "connection", name: `${data.name || "user"} had joined` }));
          }
        });
        break;
      case "draw":
        awss.clients.forEach((c) => {
          if (c.id === data.id) c.send(e.data);
        });
        break;
      case "finish":
        awss.clients.forEach((c) => {
          if (c.id === data.id) c.send(e.data);
        });
        break;
      default:
        awss.clients.forEach((c) => c.send("message"));
        break;
    }
  };
});
wsServer.app.use(cookieParser());
wsServer.app.use(
  cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

wsServer.app.use(express.json());
wsServer.app.use(FileUploader({}));
wsServer.app.use("/api", router);
wsServer.app.use(ErrorHandler);

const RunServer = async () => {
  try {
    await DataBase();
    wsServer.app.listen(PORT, () => {
      console.log(`server has been work in ${PORT}`);
    });
  } catch (e) {
    console.error(e.message);
  }
};
RunServer();
