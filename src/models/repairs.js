import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/database.js';

export default class Repairs extends Model {}
Repairs.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date_due: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    tableName: 'repairs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'repairs_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);
