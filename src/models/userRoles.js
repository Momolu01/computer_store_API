import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/database.js';

class UserRoles extends Model {}

UserRoles.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: 'UserRoles',
    schema: 'public',
    timestamps: false,
  },
);

export default UserRoles;
