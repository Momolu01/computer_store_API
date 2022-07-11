/* eslint-disable object-curly-newline */
import { Op } from 'sequelize';

import { encryptPassword } from '../middleware/index.js';
import { createToken } from '../libs/jwtHandler.js';

import Roles from '../models/roles.js';
import Users from '../models/users.js';

export const signUp = async (req, res) => {
  const { userName, email, password, roles } = req.body;

  const newUser = await Users.create({
    userName,
    email,
    password: await encryptPassword(password),
  });
  if (roles) {
    const foundRoles = await Roles.findAll({
      where: {
        name: { [Op.in]: roles },
      },
    });
    foundRoles.forEach(async (role) => {
      await role.addUser(newUser);
    });
  } else {
    const defaultRole = await Roles.findOne({ where: { name: 'user' } });
    console.log(defaultRole.name, newUser.userName);
    await defaultRole.addUser(newUser);
  }

  const token = createToken(newUser.id);
  res.status(200).json({ newUser, token });
};

export const signIn = (req, res) => {
  res.status(200).json({ message: 'signIn' });
};
