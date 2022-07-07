/* eslint-disable import/extensions */
import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/database.js';

export const ROLES = ['employee', 'user', 'admin'];
class Roles extends Model {}

Roles.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Roles',
    schema: 'public',
    timestamps: false,
  },
);

export default Roles;
