/* eslint-disable no-plusplus */
import { decodeToken } from '../libs/jwtHandler.js';

import Users from '../models/users.js';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) return res.status(403).json({ message: 'No token provided', token: null });

    const decoded = await decodeToken(token);
    req.UserID = decoded.id;

    const user = await Users.findByPk(req.UserID);
    if (!user) return res.status(404).json({ message: 'User Not Found', token: null });
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized token', token: null });
  }
};

export const isEmployee = async (req, res, next) => {
  const user = await Users.findByPk(req.UserID);
  const roles = await user.getRoles();

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'employee') return next();
  }
  return res.status(401).json({ message: 'Require employee role' });
};

export const isAdmin = async (req, res, next) => {
  const user = await Users.findByPk(req.UserID);
  const roles = await user.getRoles();

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'admin') return next();
  }
  return res.status(401).json({ message: 'Require admin role' });
};
