/* eslint-disable object-curly-spacing */
/* eslint-disable import/extensions */
import {Model, DataTypes} from 'sequelize';

import sequelize from '../database/database.js';

class Users extends Model {
  // static async init(sequelize, DataTypes) {
  //   await sequelize.authenticate();
  //   return super.init(
  //     {
  //       id: {
  //         autoIncrement: true,
  //         type: DataTypes.INTEGER,
  //         primaryKey: true,
  //       },
  //       name: {
  //         type: DataTypes.STRING(15),
  //         allowNull: false,
  //       },
  //       email: {
  //         type: DataTypes.STRING(100),
  //         allowNull: false,
  //         unique: 'users_email_key',
  //       },
  //       password: {
  //         type: DataTypes.STRING(20),
  //         allowNull: false,
  //       },
  //       role: {
  //         type: DataTypes.STRING(10),
  //         allowNull: true,
  //       },
  //       status: {
  //         type: DataTypes.STRING(20),
  //         allowNull: false,
  //         defaultValue: 'available',
  //       },
  //     },
  //     {
  //       sequelize,
  //       tableName: 'users',
  //       schema: 'public',
  //       timestamps: false,
  //     },
  //   );
  // }
}
Users.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'users_email_key',
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: 'available',
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
