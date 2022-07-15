import { Router } from 'express';
import {
  addCtrl,
  disableCtrl,
  getAllCtrl,
  getByIdCtrl,
  updateCtrl,
} from '../controllers/users.controllers.js';
import {
  checkDuplicated,
  checkExistedRole,
  isAdmin,
  isEmployee,
  verifyToken,
} from '../middleware/index.js';

const router = Router();

// GET: Obtener todos los usuarios
router.get('/', verifyToken, [isEmployee], getAllCtrl);

// GET: Obtener un usuario por su ID
router.get('/:id', getByIdCtrl);

// POST: Crear un nuevo usuario:
//  req.body(name, email, password, role), el role(rol) puede ser client o employee
router.post('/', [checkDuplicated, checkExistedRole], addCtrl);

// PATCH: Actualizar usuario por ID: Solo nombre y email
router.patch('/:id', updateCtrl);

// DELETE: Deshabilitar usuario
router.delete('/:id', disableCtrl);

export default router;
