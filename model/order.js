const sequelize = require("../config/connect");
const { DataTypes } = require("sequelize");
const goods = sequelize.define(
    "order",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        num: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sendStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payState: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        editStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        timestamps: true,
        createdAt: "createTime",
        updatedAt: "updateTime",
    }
);
module.exports = goods;
