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
    },
    avatar: {
      type: DataTypes.STRING(1500),
      allowNull: false,
      defaultValue:
        "https://img1.baidu.com/it/u=2958856559,4245953736&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permissions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'1'
    },
  },
  {
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
  }
);
module.exports = user;
