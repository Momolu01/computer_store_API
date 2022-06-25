/* eslint-disable import/extensions */
import { ROLES } from '../models/role.js';
import Users from '../models/users.js';

export const checkDuplicated = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    console.log(email, name);
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const checkExistedRole = async (req, res, next) => {
  console.log('check existed role');
  next();
};
