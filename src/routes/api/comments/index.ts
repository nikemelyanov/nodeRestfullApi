import express from 'express';
import { CommentsController } from '../../../modules/commets/controllers';

const router = express.Router();

router.post('/getComments', CommentsController.getComments)
router.post('/createComment', CommentsController.createComment)

export default router;