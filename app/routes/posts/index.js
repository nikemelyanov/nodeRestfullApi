import express from 'express';
const router = express.Router();
import { postController } from '../../controllers/posts/postController.js';
router.post('/addPost', postController.addPost);
router.post('/getPost', postController.getPost);
router.get('/getPosts', postController.getPosts);
export default router;
