/* eslint-disable import/extensions */
import { Router } from 'express';
import { getAllCtrl, getByIdCtrl } from '../controllers/users.controllers.js';

const router = Router();

// GET: Obtener todos los usuarios
router.get('/api/v1/users/', getAllCtrl);
// GET: Obtener un usuario por su ID
router.get('/api/v1/users/:id', getByIdCtrl);
// POST: Crear un nuevo usuario:
//  req.body(name, email, password, role), el role(rol) puede ser client o employee
// PATCH: Actualizar usuario por ID: Solo nombre y email
// DELETE: Deshabilitar usuario

export default router;
