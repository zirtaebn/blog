import { Router } from 'express';

import { home } from '../controllers/home.controller';
import { newPost } from '../controllers/newPost.controller';
import { addPost } from '../controllers/addPost.controller';

const router = Router();

router.get('/', home);

router.get('/newpost', newPost);

router.post('/', addPost);

export default router;

