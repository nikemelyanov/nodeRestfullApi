import express from 'express';
const router = express.Router();

import { LikesController } from '../../modules/likes/controllers';

router.post('/addLike', LikesController.add);

export default router;