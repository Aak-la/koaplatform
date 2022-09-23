const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const user = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 123,
    },
    avatar: {
      type: DataTypes.STRING(1500),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
  }
);
module.exports = user;
