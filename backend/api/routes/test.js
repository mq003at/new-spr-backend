var express = require("express");
var router = express.Router();
var Client = require("ssh2-sftp-client");
var sftp = new Client();

router.post("/", function (req, res, next) {
  // res.send("API is working properly");
  let data = JSON.parse(req.body);
  // sftp
  //   .connect({
  //     host: "ax3nhusfdqxza.northeurope.azurecontainer.io",
  //     port: "22",
  //     username: "spr-kirppissftp",
  //     password: "393e3dyu5Rjs",
      
  //   })
  //   .then(() => {
  //     return sftp.append(Buffer.from(data), "/upload/testi.txt");
  //   })
  //   .then(() => {
  //     res.send({status: true});
  //   })
  //   .then(() => {return sftp.end()})
  //   .catch((err) => {
  //     res.send({status: false})
  //   });

  console.log(data)
});

module.exports = router;
