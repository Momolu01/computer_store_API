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
}

const initialSetup = async () => {
  // UserRoles.build();
  await sequelize.sync({ force: true });

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
