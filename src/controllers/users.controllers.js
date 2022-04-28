/* eslint-disable import/extensions */
import { getAll, getById, add, update, disable } from '../services/users.services.js';

// GET: Obtener todos los usuarios
export const getAllCtrl = async (req, res, next) => {
  try {
    const result = await getAll();
    console.log(typeof req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// GET: Obtener un usuario por su ID
export const getByIdCtrl = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await getById(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
// POST: Crear un nuevo usuario:
//  req.body(name, email, password, role), el role(rol) puede ser client o employee
export const addCtrl = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await add(data);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
// PATCH: Actualizar usuario por ID: Solo nombre y email
// DELETE: Deshabilitar usuario
