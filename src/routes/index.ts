import express from 'express';

const router = express.Router();

router.use("/", (req, res) => {
    res.send("Hello, i`m Retwitzzz!")
});

export default router;
