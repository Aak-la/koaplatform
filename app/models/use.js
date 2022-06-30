const sequelize = require(".././controller/connectSql");
const { DataTypes } = require("sequelize");
const user = sequelize.define("user", {
  loginId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
  openDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
module.exports = user;
