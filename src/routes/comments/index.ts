import express from 'express';
const router = express.Router();
import { CommentsController } from '../../modules/commets/controllers';

router.post('/getComments', CommentsController.getComments)
router.post('/createComment', CommentsController.createComment)

export default router;