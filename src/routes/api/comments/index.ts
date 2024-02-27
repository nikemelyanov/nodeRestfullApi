import express from 'express';
import { CommentsController } from '../../../modules/commets/controllers';

const router = express.Router();

router.get('/comments', CommentsController.getComments)
router.post('/comments', CommentsController.createComment)

export default router;