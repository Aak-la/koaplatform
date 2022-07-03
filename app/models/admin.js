const sequelize = require("../controller/connectSql");
const { DataTypes } = require("sequelize");
const admin = sequelize.define("admin", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = admin;
