/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-catch */
import Roles from '../models/roles.js';
import Users from '../models/users.js';
import Repairs from '../models/repairs.js';
import sequelize from '../database/database.js';
import '../models/userRoles.js';

function entitiesAssiciations() {
  Users.belongsToMany(Roles, { through: 'UserRoles' });
  Roles.belongsToMany(Users, { through: 'UserRoles' });

  Users.hasOne(Repairs);
  Repairs.belongsTo(Users);
}

const initialSetup = async () => {
  // await sequelize.sync({ force: true });
  await sequelize.sync({ alter: true });

  entitiesAssiciations();

  const count = await Roles.count();
  try {
    if (count <= 0) {
      await Promise.all([
        Roles.create({ name: 'user' }),
        Roles.create({ name: 'employee' }),
        Roles.create({ name: 'admin' }),
      ]);
    }
    return;
  } catch (error) {
    throw error;
  }
};

export default initialSetup;
