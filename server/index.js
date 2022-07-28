const express = require("express");
require("dotenv").config();
const DataBase = require("./db/index");
const router = require("./routes/index");
const app = express();
const wsServer = require("express-ws")(app);
const awss = wsServer.getWss();
const FileUploader = require("express-fileupload");
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials:true,
    optionsSuccessStatus: 200
  })
);

app.use(express.json());
app.use(FileUploader({}));
app.use("/api", router);

const RunServer = async () => {
  try {
    await DataBase();
    app.listen(5000, () => {
      console.log(`server has been work in 5000`);
    });
  } catch (e) {
    console.error(e.message);
  }
};
RunServer();
