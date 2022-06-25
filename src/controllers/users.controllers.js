/* eslint-disable import/extensions */
import {
  getAll,
  getById,
  add,
  update,
  disable,
} from '../services/users.services.js';
import { encryptPassword } from '../middleware/index.js';

// GET: Obtener todos los usuarios
export const getAllCtrl = async (req, res, next) => {
  try {
    const result = await getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// GET: Obtener un usuario por su ID
export const getByIdCtrl = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result = await getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// POST: Crear un nuevo usuario:
//  req.body(name, email, password, role), el role(rol) puede ser client o employee
export const addCtrl = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;
    const encryptedPassword = await encryptPassword(password);
    const newUser = {
      name,
      email,
      password: encryptedPassword,
      role,
    };
    const result = await add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// PATCH: Actualizar usuario por ID: Solo nombre y email
export const updateCtrl = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const data = req.body;
  try {
    const response = {
      message: `Se ha actualizado el usuario con ID: ${id}`,
    };
    await update(id, data);
    res.status(202).json(response);
  } catch (error) {
    next(error);
  }
};

// DELETE: Deshabilitar usuario
export const disableCtrl = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const response = {
    message: `Se ha deshabilitado el usuario con ID: ${id}`,
  };
  try {
    await disable(id);
    res.status(202).json(response);
  } catch (error) {
    next(error);
  }
};
