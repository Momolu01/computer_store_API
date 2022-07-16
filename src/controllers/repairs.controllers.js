/* eslint-disable no-plusplus */
import { decodeToken } from '../libs/jwtHandler.js';

import Users from '../models/users.js';
import {
  getAll,
  getById,
  add,
  update,
  cancel,
} from '../services/repairs.services.js';

// GET: Obtener todos los equipos
export const getAllCtrl = async (req, res, next) => {
  try {
    const result = await getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// GET: Obtener un equipo por su ID
export const getByIdCtrl = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result = await getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// POST: Crear un nuevo equipo:
//  date y userId
export const addCtrl = async (req, res, next) => {
  let newProduct;
  const { dateDue, userId: providedId } = req.body;
  try {
    const userId = (await decodeToken(req.headers['x-access-token'])).id;
    const user = await Users.findByPk(userId);
    const userRoles = await user.getRoles();
    for (let i = 0; i < userRoles.length; i++) {
      const role = userRoles[i];
      if (role.name === 'admin' || role.name === 'employee') {
        // eslint-disable-next-line no-await-in-loop
        newProduct = await add({
          dateDue,
          UserId: providedId,
        });
        return res.status(201).json(newProduct);
      }
    }
    newProduct = await add({
      dateDue,
      UserId: userId,
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    return next(error);
  }
};

// PATCH: Actualizar equipo por ID: Cambia el status a completed
export const updateCtrl = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const data = req.body;
  try {
    const response = {
      message: `Se ha actualizado la orden de reparación con ID: ${id}`,
    };
    await update(id, data);
    res.status(202).json(response);
  } catch (error) {
    next(error);
  }
};

// DELETE: Cancelaa la reparación de un equipo: Cambia su status a cancelled
export const cancelCtrl = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const response = {
    message: `Se ha canceladi la orden de reparación con ID: ${id}`,
  };
  try {
    await cancel(id);
    res.status(202).json(response);
  } catch (error) {
    next(error);
  }
};
