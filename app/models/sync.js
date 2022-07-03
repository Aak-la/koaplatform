require("./admin");
const sequelize = require("../controller/connectSql");
sequelize.sync({ alter: true }).then(() => {
  console.log("模型同步成功");
});
