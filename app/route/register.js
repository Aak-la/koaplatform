const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Admin = require("../models/admin");
router.post("/", (req, res) => {
  let name = req.query.username;
  let password = req.query.password;
  let md5 = crypto.createHash("md5");
  let newPassword = md5.update(password).digest("hex");
  Admin.findAll({
    where: {
      username: name,
    },
    raw: true,
  })
    .then((data) => {
      return data;
    })
    .then((data) => {
      if (data) {
        res.send("已存在用户");
      } else {
        Admin.create({
          username: name,
          password: newPassword,
        })
          .then(function (result) {
            res.send("注册成功!");
          })
          .catch(function (err) {
            res.send("注册失败!" + err);
          });
      }
    });
});

module.exports = router;
