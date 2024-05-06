import express from 'express';
import { UserController } from '../../../../modules/users/controllers';

const router = express.Router();

router.post('/updateAvatar', UserController.updateAvatar);

export default router;
