const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const token_key = "Bear";
const saltRounds = 10;


const createToken = (userInfo, timeout = "5h") => {
  const token_info = {
    userInfo,
    ctime: new Date().getTime(),
  };
  const token = jwt.sign(token_info, token_key, { expiresIn: timeout });
  return token;
};


const verifyToken = async (old_token) => {
  try {
    const userInfo = await jwt.verify(old_token.split(" ")[1], "Bear");
    return userInfo;
  } catch (err) {
    return false;
  }
};


const encrypted = (password) => {
  return new Promise((resolve) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.log(err);
        }
        resolve(hash);
      });
    });
  });
};


const verifyPwd = (password, hash) => {
  return new Promise((resolve) => {
    bcrypt.compare(password, hash, (err, res) => {
      if (err) {
        console.log(err);
      }
      resolve(res);
    });
  });
};

module.exports = {
  verifyPwd,
  encrypted,
  verifyToken,
  createToken,
};
