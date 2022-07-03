const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
router.post("/", (req, res) => {
  let name = req.query.username;
  let password = req.query.password;
  let md5 = crypto.createHash("md5");
  let newPassword = md5.update(password).digest("hex");  
  Admin.findAll({
      where: {
          username: name
      },
      raw: true
  }).then(function(data){
      if(data){
          if(data[0].password === newPassword){
              let token = jwt.sign(data[0],'app.get(superSecret)',{
                  expiresIn: 1440 
              })
              res.send({
                  success: true,
                  message: 'Enjoy your token!',
                  token: token
              });
          }else{
              res.send("登录失败!")
          }
      }
  })
});
module.exports = router;
