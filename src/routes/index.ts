import express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.json({ hello: 'hello retwitzzz' });
});

export default router;
