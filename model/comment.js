const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const comment = sequelize.define(
  "comment",
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
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
module.exports = comment;
