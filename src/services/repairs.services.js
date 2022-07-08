/* eslint-disable no-useless-catch */
import Repairs from '../models/repairs.js';

// GET: Obtener todos los equipos
export const getAll = async () => {
  try {
    const result = await Repairs.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};

// GET: Obtener un equipo por su ID
export const getById = async (id) => {
  try {
    const result = await Repairs.findByPk(id);
    return result;
  } catch (error) {
    throw error;
  }
};

// POST: Crear un nuevo equipo:
//  date y userId
export const add = async (obj) => {
  try {
    const result = await Repairs.create(obj);
    return result;
  } catch (error) {
    throw error;
  }
};

// PATCH: Actualizar equipo por ID: Cambia el status a completed
export const update = async (id, obj) => {
  const options = {
    where: { id },
  };
  try {
    const result = await Repairs.update(obj, options);
    return result;
  } catch (error) {
    throw error;
  }
};
// DELETE: Cancelaa la reparación de un equipo: Cambia su status a cancelled
export const cancel = async (id) => {
  const obj = { status: 'cancelled' };
  const options = {
    where: { id },
  };
  try {
    const result = await Repairs.update(obj, options);
    return result;
  } catch (error) {
    throw error;
  }
};
