const Permission = require('./permissions');
const Role = require('./roles');
const User = require('./users');
const UserRolePermission = require('./permissionUserRoles');

User.belongsToMany(Role, { through: UserRolePermission, foreignKey: 'id_user', otherKey: 'id_role' });
User.belongsToMany(Permission, { through: UserRolePermission, foreignKey: 'id_user', otherKey: 'id_permission' });
Role.belongsToMany(User, { through: UserRolePermission, foreignKey: 'id_role', otherKey: 'id_user' });
Permission.belongsToMany(User, { through: UserRolePermission, foreignKey: 'id_permission', otherKey: 'id_user' });


module.exports = {
    Permission,
    Role,
    User,
    UserRolePermission
}