import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, i`m Retwitzzz!")
});

export default router;
