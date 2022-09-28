const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const project = sequelize.define(
  "project",
  {
    url: {
      type: DataTypes.STRING(1500),
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING(1500),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    objective: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
  }
);
module.exports = project;
