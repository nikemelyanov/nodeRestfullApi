import express from 'express';
const router = express.Router();
import { createPost } from '../../../controllers/posts/postControllers.js';
router.post('/addPost', createPost);
export default router;
