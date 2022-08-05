import { Router } from 'express';

import { home } from '../controllers/home.controller';
import { newPost } from '../controllers/newpost.controller';

const router = Router();

router.get('/', home);

router.get('/newpost', newPost);

export default router;

