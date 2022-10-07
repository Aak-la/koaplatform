const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const classification = sequelize.define("classification", {
  total: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = classification;
