import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  console.log('verifying token');
  next();
};

export const isEmployee = async (req, res, next) => {
  console.log('verifying if is an employee');
  next();
};

export const isAdmin = async (req, res, next) => {
  console.log('verifying if is an administrator');
  next();
};
