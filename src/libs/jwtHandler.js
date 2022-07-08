import * as jwt from 'jsonwebtoken';
import tokenConfig from '../config/token.config.js';

export const createToken = (userId) => {
  const newToken = jwt.sign({ id: userId }, tokenConfig.SECRET, {
    expiresIn: 3600,
  });
  return newToken;
};

export const decodeToken = async (token) => {
  const tokenDecoded = jwt.verify(token, tokenConfig.SECRET);
  return tokenDecoded;
};
