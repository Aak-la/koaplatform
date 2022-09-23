const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const comment = sequelize.define(
  "comment",
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commentUser: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "郭问兰",
    },
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    avatar: {
      type: DataTypes.STRING(1500),
      allowNull: false,
      defaultValue:
        "https://img1.baidu.com/it/u=2958856559,4245953736&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    },
  },
  {
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
  }
);
module.exports = comment;
