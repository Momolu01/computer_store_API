/* eslint-disable object-curly-spacing */
import { Model, DataTypes, Deferrable } from 'sequelize';

import sequelize from '../database/database.js';

class Users extends Model {}
Users.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'users_email_key',
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: 'available',
    },
    roles: {
      get() {
        return JSON.parse(this.getDataValue('myArrayField'));
      },
      set(val) {
        return this.setDataValue('myArrayField', JSON.stringify(val));
      },
      type: DataTypes.INTEGER,
      reference: {
        model: sequelize.models.Roles,
        key: 'id',
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
  },
  {
    sequelize,
    modelName: 'Users',
    schema: 'public',
    timestamps: false,
  },
);

export default Users;
