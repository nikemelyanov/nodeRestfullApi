import express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.json({ hello: 'my app' });
});

export default router;
