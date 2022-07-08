import { Router } from 'express';
import { signUp } from '../controllers/auth.controllers.js';
import { checkDuplicated, checkExistedRole } from '../middleware/index.js';

const router = Router();

router.post('/signup', [checkDuplicated, checkExistedRole], signUp);

export default router;
