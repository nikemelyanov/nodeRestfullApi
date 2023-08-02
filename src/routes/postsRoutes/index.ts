import express from 'express';
const router = express.Router();

import { createPost, getOnePost, getAllPost } from '../../controllers/posts/postControllers.js';

router.post('/addPost', createPost);
router.post('/getPost', getOnePost);
router.post('/getPosts', getAllPost);

export default router;
