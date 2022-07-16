import { Router } from 'express';
import {
  addCtrl,
  cancelCtrl,
  getAllCtrl,
  getByIdCtrl,
  updateCtrl,
} from '../controllers/repairs.controllers.js';

import { isAdmin, isEmployee, verifyToken } from '../middleware/index.js';

const router = Router();

// GET: Obtener todos los equipos
router.get('/', verifyToken, getAllCtrl);

// GET: Obtener un equipo por su ID
router.get('/:id', getByIdCtrl);

// POST: Crear un nuevo equipo:
//  date y userId
router.post('/', verifyToken, addCtrl);

// PATCH: Actualizar equipo por ID: Cambia el status a completed
router.patch('/:id', verifyToken, [isAdmin || isEmployee], updateCtrl);

// DELETE: Cancelar la reparación de un equipo: Cambia su status a cancelled
router.delete('/:id', verifyToken, cancelCtrl);

export default router;
