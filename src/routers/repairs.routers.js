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
router.get('/api/v1/repairs/', getAllCtrl);

// GET: Obtener un equipo por su ID
router.get('/api/v1/repairs/:id', getByIdCtrl);

// POST: Crear un nuevo equipo:
//  date y userId
router.post('/api/v1/repairs/', addCtrl);

// PATCH: Actualizar equipo por ID: Cambia el status a completed
router.patch('/api/v1/repairs/:id', updateCtrl);

// DELETE: Cancelaa la reparación de un equipo: Cambia su status a cancelled
router.delete('/api/v1/repairs/:id', cancelCtrl);

export default router;
