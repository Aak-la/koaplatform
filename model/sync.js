require("./comment");
require("./user");
require("./blogList");
require("./classification");
require("./project");
const sequelize = require("../config/connect");
sequelize.sync({ alter: true }).then(() => {
  console.log("模型同步成功");
});
