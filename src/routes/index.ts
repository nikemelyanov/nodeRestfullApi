import express from 'express';

import authRouter from "../routes/users/auth";
import postRouter from "../routes/posts";
import commentsRouter from "../routes/comments";
import likesRouter from "../routes/likes";
import usersRouter from "../routes/users/update";

const router = express.Router();

router.use("/", (req, res) => {
    res.send('hello, im Retwitzzz!')
})

router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/comments", commentsRouter);
router.use("/likes", likesRouter);
router.use("/users", usersRouter);

export default router;
