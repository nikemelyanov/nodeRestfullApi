import express, { json } from "express";
import indexRouter from "./routes";
import authRouter from "./routes/users/auth";
import postRouter from "./routes/posts";
import commentsRouter from "./routes/comments";
import likesRouter from "./routes/likes";
import usersRouter from "./routes/users/update";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db";

const app = express();
const port = process.env.port || 4000;

dotenv.config();

app.use(json());
app.use(
  cors({
    origin: ["https://retwitzzz.vercel.app", "http://localhost:3000"],
  })
);

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);
app.use("/likes", likesRouter);
app.use("/users", usersRouter);

app.use("/images", express.static("./app/images"));

app.listen(port, () => {
  try {
    pool.connect();
    console.log("succesful database OK.");
    console.log(authRouter)
  } catch (err) {
    console.error("ошибка подключения к бд.");
  }
  console.log(`app started in ${port} port`);
});
