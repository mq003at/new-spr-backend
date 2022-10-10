var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var path = require("path");
var Client = require("ssh2-sftp-client");
var sftp = new Client();
var fs = require("fs");

var test = require("./routes/test");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "../../frontend/build")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../../frontend/build/index.html")));
// app.post("/test", (req, res) => {
//   let myFile = req.body;
  
//   console.log(myFile);
//   sftp
//     .connect({
//       host: "ax3nhusfdqxza.northeurope.azurecontainer.io",
//       port: "22",
//       username: "spr-kirppissftp",
//       password: "393e3dyu5Rjs",
//     })
//     .then(() => {
//       return sftp.put(myFile, "/upload");
//     })
//     .then(() => {
//       res.send({ status: true });
//     })
//     .then(() => {
//       return sftp.end();
//     })
//     .catch((err) => {
//       res.send({ status: false, error: err });
//     });
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
