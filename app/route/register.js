const express = require("express");
const router = express.Router();
const crypto = require("crypto");
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
  })
    .then((data) => {
      return data;
    })
    .then((data) => {
      if (data.length) {
        res.send({
          code: 0,
          data: [{ msg: "用户已存在，重新输入" }],
        });
      } else {
        Admin.create({
          username: name,
          password: newPassword,
        })
          .then(function (result) {
            res.send({
              code: 0,
              data: [{ msg: "注册成功!" }],
            });
          })
          .catch(function (err) {
            res.send({
              code: 0,
              data: [{ msg: "注册失败!" }],
            });
          });
      }
    });
});

module.exports = router;
