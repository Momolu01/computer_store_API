/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-catch */
import Roles from '../models/role.js';
import Users from '../models/users.js';
import Repairs from '../models/repairs.js';
import sequelize from '../database/database.js';

function entityAssiciations() {
  console.log('associations');
  Users.hasMany(Roles);
  Roles.belongsTo(Users);
  Users.hasMany(Repairs);
  Repairs.belongsTo(Users);
}

const initialSetup = async () => {
  const count = await Roles.count();
  console.log(count);
  try {
    if (count < 0) {
      const values = await Promise.all([
        new Roles({ name: 'user' }).save(),
        new Roles({ name: 'moderator' }).save(),
        new Roles({ name: 'admin' }).save(),
      ]);
      console.log(values);
    }
    entityAssiciations();
    await sequelize.sync({ force: true });
    return;
  } catch (error) {
    throw error;
  }
};

export default initialSetup;
