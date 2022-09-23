const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const blog = sequelize.define(
  "blog",
  {
    scanNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    commentNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(1500),
      allowNull: true,
      defaultValue:
        "https://img1.baidu.com/it/u=1594252799,603511575&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
  },
  {
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
  }
);
module.exports = blog;
