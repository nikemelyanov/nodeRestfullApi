import express from 'express';
const router = express.Router();

import {
  addPost,
  getPosts,
  getPost,
} from '../../controllers/posts/postControllers.js';

router.post('/addPost', addPost);
router.post('/getPost', getPost);
router.get('/getPosts', getPosts);

export default router;
