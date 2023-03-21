const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const Role = db.define('role', {
    id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_role: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        timestamps:false
    }
);

module.exports = Role;