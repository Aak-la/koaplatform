const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const goods = sequelize.define(
  "goods",
  {
    data: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    createdAt: "createTime",
    updatedAt: "updateTime",
  }
);
module.exports = goods;
