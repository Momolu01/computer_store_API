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
router.get('/', verifyToken, [isAdmin], getAllCtrl);

// GET: Obtener un usuario por su ID
router.get('/:id', verifyToken, [isAdmin || isEmployee], getByIdCtrl);

// POST: Crear un nuevo usuario:
//  req.body(name, email, password, role), el role(rol) puede ser client o employee
router.post('/', verifyToken, [isAdmin], [checkDuplicated, checkExistedRole], addCtrl);

// PATCH: Actualizar usuario por ID: Solo nombre y email
router.patch('/:id', verifyToken, [isAdmin || isEmployee], updateCtrl);

// DELETE: Deshabilitar usuario
router.delete('/:id', verifyToken, [isAdmin], disableCtrl);

export default router;
