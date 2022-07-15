/* eslint-disable no-useless-catch */
import { Op } from 'sequelize';

import Users from '../models/users.js';
import Roles from '../models/roles.js';

// GET: Obtener todos los usuarios
export const getAll = async () => {
  try {
    const result = await Users.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};

// GET: Obtener un usuario por su ID
export const getById = async (id) => {
  try {
    const result = await Users.findByPk(id);
    return { user: result, roles: await result.getRoles() };
  } catch (error) {
    throw error;
  }
};
// POST: Crear un nuevo usuario:
//   req.body(name, email, password, role), el role(rol) puede ser client o employee
export const add = async (obj) => {
  const { userName, email, password, roles } = obj;
  try {
    const addedUser = await Users.create({ userName, email, password });
    if (roles) {
      const foundRoles = await Roles.findAll({
        where: {
          name: { [Op.in]: roles },
        },
      });
      foundRoles.forEach(async (role) => {
        await addedUser.addRole(role);
      });
    } else {
      const defaultRole = await Roles.findOne({ where: { name: 'user' } });
      await addedUser.addRole(defaultRole);
    }
    return addedUser;
  } catch (error) {
    throw error;
  }
};
// PATCH: Actualizar usuario por ID: Solo nombre y email
export const update = async (id, obj) => {
  const options = {
    where: { id },
  };
  try {
    const result = await Users.update(obj, options);
    return result;
  } catch (error) {
    throw error;
  }
};
// DELETE: Deshabilitar usuario
export const disable = async (id) => {
  const obj = { status: 'disavailable' };
  const options = {
    where: { id },
  };
  try {
    const result = await Users.update(obj, options);
    return result;
  } catch (error) {
    throw error;
  }
};
