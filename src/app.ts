import express, { json } from 'express';
import indexRouter from './routes/index.js';
import authRouter from './routes/userRoutes/auth/index.js';
import postRouter from './routes/postsRoutes/index.js';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env.port || 4000;

app.use(json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/posts', postRouter);

app.listen(port, () => console.log(`app started in ${port} port`));
