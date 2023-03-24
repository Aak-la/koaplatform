require("./user");
require("./classify");
require("./project");
require("./goods");
require("./order");
const sequelize = require("../config/connect");
sequelize.sync({ alter: true }).then(() => {
  console.log("模型同步成功");
});
