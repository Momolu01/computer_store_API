/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import { ROLELIST } from '../models/role.js';
import Users from '../models/users.js';

export const checkDuplicated = async (req, res, next) => {
  try {
    if (await Users.count() > 0) {
      const receivedName = req.body.userName;
      const receivedEmail = req.body.email;
      const storedName = await Users.findOne({
        where: { userName: receivedName },
      });
      if (storedName) {
        return res
          .status(400)
          .json({ message: `The name ${receivedName} already existed.` });
      }
      const storedEmail = await Users.findOne({
        where: { email: receivedEmail },
      });
      if (storedEmail) {
        return res
          .status(400)
          .json({ message: `The email ${receivedEmail} already existed.` });
      }
    }
    return next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const checkExistedRole = (req, res, next) => {
  const { roles } = req.body;
  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLELIST.includes(roles[i])) {
        return res
          .status(400)
          .json({ message: `Role ${roles[i]} does no exists` });
      }
    }
  }
  return next();
};
