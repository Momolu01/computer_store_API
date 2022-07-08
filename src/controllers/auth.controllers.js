/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
import { Op } from 'sequelize';
import { encryptPassword } from '../middleware/index.js';

import Roles from '../models/role.js';
import Users from '../models/users.js';

export const signUp = async (req, res) => {
  const { userName, email, password, roles } = req.body;

  const newUserObj = {
    userName,
    email,
    password: await encryptPassword(password),
  };
  if (roles) {
    const foundRoles = await Roles.findAll({
      where: {
        name: {
          [Op.in]: roles,
        },
      },
    });
    newUserObj.roles = foundRoles.map((role) => role.id);
  } else {
    const role = await Roles.findOne({ where: { name: 'user' } });
    newUserObj.roles = [role.id];
  }
  console.log(newUserObj);
  const newUser = Users.create(newUserObj);

  res.status(200).json({ message: 'signUp', newUser });
};

export const signIn = (req, res) => {
  res.status(200).json({ message: 'signIn' });
};
