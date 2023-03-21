const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const UserRolePermission = db.define('users_roles_permissions', {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id_user'
      }
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id_role'
      }
    },
    id_permission: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'permission',
        key: 'id_permission'
      }
    }
  });

  module.exports = UserRolePermission;