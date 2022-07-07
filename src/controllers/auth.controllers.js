import Roles from '../models/role.js';
import Users from '../models/users.js';

export const signUp = (req, res) => {
  
  res.status(200).json({ message: 'signUp' });
};

export const signIn = (req, res) => {
  res.status(200).json({ message: 'signIn' });
};
