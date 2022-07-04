const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
router.post("/", (req, res) => {
  let name = req.body.params.name;
  let password = req.body.params.passWord;
  let md5 = crypto.createHash("md5");
  let newPassword = md5.update(password).digest("hex");
  Admin.findAll({
    where: {
      username: name,
    },
    raw: true,
  }).then(function (data) {
    if (data) {
      if (data[0].password === newPassword) {
        let token = jwt.sign(data[0], "app.get(superSecret)", {
          expiresIn: 1440,
        });
        res.send({
          code: 0,
          data: [{ msg: "登录成功", token: token }],
        });
      } else {
        res.send({
            code: 500,
            data: [{ msg: "登录失败" }],
          });
      }
    }
  });
});
module.exports = router;
