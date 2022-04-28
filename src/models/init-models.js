/* eslint-disable import/extensions */
import _sequelize from 'sequelize';
import _repairs from './repairs.js';
import _users from './users.js';
import config from '../config/config.js';

const { DataTypes } = _sequelize;

export default function initModels() {
  const env = process.env.NODE_ENV || 'development';

  const configObj = config[env];
  let sequelize;

  if (configObj.use_env_variable) {
    sequelize = new _sequelize(
      process.env[configObj.use_env_variable],
      configObj,
    );
  } else {
    sequelize = new _sequelize(
      configObj.database,
      configObj.username,
      configObj.password,
      configObj,
    );
  }

  const repairs = _repairs.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  return {
    repairs,
    users,
  };
}
