import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.controllers.js';
import { checkDuplicated, checkExistedRole } from '../middleware/index.js';

const router = Router();

router.post('/signup', [checkDuplicated, checkExistedRole], signUp);
router.post('/signin', signIn);

export default router;
