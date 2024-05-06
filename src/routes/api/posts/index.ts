import express from 'express';
import { PostController } from '../../../modules/posts/controllers';

const router = express.Router();

router.post('/posts', PostController.addPost);
router.get('/posts', PostController.getPosts);

export default router;
