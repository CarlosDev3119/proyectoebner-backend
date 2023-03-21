const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const Permission= db.define('permission', {
        id_permission: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name_permission: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps:false
    }
);

module.exports = Permission;