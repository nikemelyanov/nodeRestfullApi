import express from 'express';
const router = express.Router();

import { PostController } from '../../modules/posts/controllers';

router.post('/addPost', PostController.addPost);
router.post('/getPost', PostController.getPost);
router.get('/getPosts', PostController.getPosts);

export default router;
