CREATE TABLE users (
    id_user int PRIMARY KEY AUTO_INCREMENT,
    name_user varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    second_name varchar(100) NOT NULL,
    pass varchar(100) NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    registration_number varchar(100) UNIQUE NOT NULL
    
)ENGINE = INNODB;

CREATE TABLE roles (
    id_role int PRIMARY KEY,
    role_name varchar(100) NOT NULL
)ENGINE = INNODB;

CREATE TABLE permissions (
    id_permission int PRIMARY KEY,
    name_permission varchar(100) NOT NULL
)ENGINE = INNODB;

CREATE TABLE users_roles_permissions (
    id_user int,
    id_role int,
    id_permission int,
    PRIMARY KEY (id_user, id_role, id_permission),
    FOREIGN KEY (id_user) REFERENCES users (id_user),
    FOREIGN KEY (id_role) REFERENCES role (id_role),
    FOREIGN KEY (id_permission) REFERENCES permissions (id_permission)
)ENGINE = INNODB;

INSERT INTO role (id_rol, nombre_rol)
VALUES (1, 'alumno'), (2, 'profesor');

INSERT INTO permisos (id_permiso, nombre_permiso)
VALUES (1, 'ver notas'), (2, 'crear tarea'), (3, 'eliminar tarea');



INSERT INTO usuarios_roles_permisos (id_usuario, id_rol, id_permiso)
VALUES
  (1, 1, 1), -- asignación de "ver notas" al rol "alumno" para el usuario "Juan"
  (1, 1, 2), -- asignación de "crear tarea" al rol "alumno" para el usuario "Juan"
  (1, 1, 3), -- asignación de "eliminar tarea" al rol "alumno" para el usuario "Juan"
  (1, 2, 1), -- asignación de "ver notas" al rol "profesor" para el usuario "Juan"
  (1, 2, 2), -- asignación de "crear tarea" al rol "profesor" para el usuario "Juan"
  (1, 2, 3); -- asignación de "eliminar tarea" al rol "profesor" para el usuario "Juan"


SELECT p.nombre_permiso, r.nombre_rol
FROM usuarios_roles_permisos urp
JOIN permisos p ON urp.id_permiso = p.id_permiso
JOIN role r ON urp.id_rol = r.id_rol
WHERE urp.id_usuario = 1;


const User = sequelize.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
});

const Role = sequelize.define('role', {
  id_role: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  role_name{
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Permission= sequelize.define('permission', {
  id_permission: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name_permission: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const UsuariosRolesPermisos = sequelize.define('usuarios_roles_permisos', {
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuario',
      key: 'id_usuario'
    }
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'rol',
      key: 'id_rol'
    }
  },
  id_permiso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'permiso',
      key: 'id_permiso'
    }
  }
});

Usuario.belongsToMany(Rol, { through: UsuariosRolesPermisos, foreignKey: 'id_usuario', otherKey: 'id_rol' });
Usuario.belongsToMany(Permiso, { through: UsuariosRolesPermisos, foreignKey: 'id_usuario', otherKey: 'id_permiso' });
Rol.belongsToMany(Usuario, { through: UsuariosRolesPermisos, foreignKey: 'id_rol', otherKey: 'id_usuario' });
Permiso.belongsToMany(Usuario, { through: UsuariosRolesPermisos, foreignKey: 'id_permiso', otherKey: 'id_usuario' });

