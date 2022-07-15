/* eslint-disable object-curly-newline */
import {
  getAll,
  getById,
  add,
  update,
  disable,
} from '../services/users.services.js';
import { encryptPassword } from '../middleware/index.js';

// GET: Obtener todos los usuarios
export const getAllCtrl = async (req, res) => {
  const result = await getAll();
  res.status(200).json(result);
};

// GET: Obtener un usuario por su ID
export const getByIdCtrl = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = await getById(id);
  res.status(200).json(result);
};

// POST: Crear un nuevo usuario:
//  req.body(name, email, password, role), el role(rol) puede ser client o employee
export const addCtrl = async (req, res) => {
  const { userName, email, password, roles } = req.body;
  const newUser = {
    userName,
    email,
    password: await encryptPassword(password),
    roles,
  };
  const addedUser = await add(newUser);
  res.status(201).json(addedUser);
};

// PATCH: Actualizar usuario por ID: Solo nombre y email
export const updateCtrl = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = req.body;
  const response = {
    message: `Se ha actualizado el usuario con ID: ${id}`,
  };
  await update(id, data);
  res.status(202).json(response);
};

// DELETE: Deshabilitar usuario
export const disableCtrl = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = {
    message: `Se ha deshabilitado el usuario con ID: ${id}`,
  };
  await disable(id);
  res.status(202).json(response);
};
