/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import Roles from '../models/role.js';

export const createRoles = async () => {
  const count = await Roles.count();

  try {
    if (count > 0) return;

    const values = await Promise.all([
      new Roles({ name: 'user' }),
      new Roles({ name: 'moderator' }),
      new Roles({ name: 'admin' }),
    ]);
    console.log(values);
  } catch (error) {
    throw error;
  }
};
