const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const classify = sequelize.define(
  "classify",
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classifyNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "createTime",
    updatedAt: "updateTime",
  }
);
module.exports = classify;
