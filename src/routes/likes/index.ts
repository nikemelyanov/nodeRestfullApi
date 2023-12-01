import express from 'express';
import { LikesController } from '../../modules/likes/controllers';

const router = express.Router();

router.post('/addLike', LikesController.add);

export default router;