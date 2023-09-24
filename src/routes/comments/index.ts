import express from 'express';
const router = express.Router();
import { CommentsController } from '../../controllers/comments/commentsController.js';

router.post('/getComments', CommentsController.getComments)

export default router;