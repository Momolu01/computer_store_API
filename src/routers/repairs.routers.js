/* eslint-disable import/extensions */
import { Router } from 'express';
import {
  addCtrl,
  cancelCtrl,
  getAllCtrl,
  getByIdCtrl,
  updateCtrl,
} from '../controllers/repairs.controllers.js';

const router = Router();

// GET: Obtener todos los equipos
router.get('/', getAllCtrl);

// GET: Obtener un equipo por su ID
router.get('/:id', getByIdCtrl);

// POST: Crear un nuevo equipo:
//  date y userId
router.post('/', addCtrl);

// PATCH: Actualizar equipo por ID: Cambia el status a completed
router.patch('/:id', updateCtrl);

// DELETE: Cancelaa la reparación de un equipo: Cambia su status a cancelled
router.delete('/:id', cancelCtrl);

export default router;
