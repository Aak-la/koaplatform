const data = require("./data");
const checkToken = async (old_token) => {
  try {
    const userInfo = await jwt.verify(old_token.split(" ")[1], "Bear");
    return userInfo;
  } catch (err) {
    return false;
  }
};
function randomStr() {
  var result = "";
  for (var i = 0; i < 1; i++) {
    var r = Math.floor(Math.random() * 20);
    result += data[r];
  }
  return result;
}
module.exports = { randomStr, checkToken };
