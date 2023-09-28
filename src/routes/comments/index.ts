import express from 'express';
const router = express.Router();
import { CommentsController } from '../../controllers/comments/commentsController.js';

router.post('/getComments', CommentsController.getComments)
router.post('/createComment', CommentsController.createComment)

export default router;