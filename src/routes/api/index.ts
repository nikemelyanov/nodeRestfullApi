import express from 'express';

import authRouter from "./users/auth";
import postRouter from "./posts";
import commentsRouter from "./comments";
import likesRouter from "./likes";
import usersRouter from "./users/update";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/comments", commentsRouter);
router.use("/likes", likesRouter);
router.use("/users", usersRouter);

export default router;
