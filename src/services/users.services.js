/* eslint-disable import/extensions */
/* eslint-disable no-useless-catch */
import initModels from '../models/init-models.js';

const { users } = initModels();

// GET: Obtener todos los usuarios
export const getAll = async () => {
  try {
    const result = await users.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};

// GET: Obtener un usuario por su ID
export const getById = async (id) => {
  try {
    const result = await users.findByPk(id);
    return result;
  } catch (error) {
    throw error;
  }
};
// POST: Crear un nuevo usuario:
//   req.body(name, email, password, role), el role(rol) puede ser client o employee
export const add = async (obj) => {
  try {
    const result = await users.create(obj);
    return result;
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
    const result = await users.update(obj, options);
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
    const result = await users.update(obj, options);
    return result;
  } catch (error) {
    throw error;
  }
};
