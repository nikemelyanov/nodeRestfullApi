import express, { json } from "express";
import indexRouter from "./routes";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db";

const app = express();
const port = process.env.PORT || 7777; // no work .env

dotenv.config();

app.use(json());
app.use(
  cors({
    origin: ["https://retwitzzz.vercel.app", "http://localhost:3000"],
  })
);
app.use("/api", indexRouter);
app.use("/images", express.static("./app/images"));

app.listen(port, async () => {
  try {
    await pool.connect();
    console.log("succesful database OK.");
  } catch (err) {
    console.error("ошибка подключения к бд.");
  }
  console.log(`app started in ${port} port`);
});
