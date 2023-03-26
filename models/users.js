const { DataTypes } = require("sequelize");
const { db } = require("../db/config");


const User = db.define('user', {

        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        second_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_of_birth:{
            type: DataTypes.STRING,
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        registration_number: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    },
    {
        timestamps:false
    }
);

module.exports = User;