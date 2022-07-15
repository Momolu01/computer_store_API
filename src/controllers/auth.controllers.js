/* eslint-disable object-curly-newline */
import { encryptPassword, comparePassword } from '../middleware/index.js';
import { createToken } from '../libs/jwtHandler.js';
import { add as addUser } from '../services/users.services.js';

import Users from '../models/users.js';

export const signUp = async (req, res) => {
  const { userName, email, password, roles } = req.body;
  const newUser = await addUser({
    userName,
    email,
    password: await encryptPassword(password),
    roles,
  });
  const token = createToken(newUser.id);
  return res.status(200).json({ newUser, token });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await Users.findOne({
    where: {
      email,
    },
  });

  if (!userFound) return res.status(400).json({ message: 'User Not Found' });

  const matchPassword = await comparePassword(password, userFound.password);

  if (!matchPassword) {
    return res.status(401).json({ message: 'Incorrect Password', token: null });
  }
  const token = createToken(userFound.id);
  return res.status(200).json({ message: 'signIn', token });
};
