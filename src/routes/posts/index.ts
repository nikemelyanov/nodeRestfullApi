import express from 'express';
import { PostController } from '../../modules/posts/controllers';

const router = express.Router();

router.post('/addPost', PostController.addPost);
router.post('/getPost', PostController.getPost);
router.get('/getPosts', PostController.getPosts);

export default router;
