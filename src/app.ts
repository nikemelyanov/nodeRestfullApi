import express, { json } from 'express';
import indexRouter from './routes/index.js';
import authRouter from './routes/users/auth/index.js';
import postRouter from './routes/posts/index.js';
import commentsRouter from './routes/comments/index.js';
import cors from 'cors';
import dotenv from 'dotenv'
import pool from './database.js';

const app = express();
const port = process.env.port || 4000;

dotenv.config()

app.use(json());
app.use(
  cors({
    origin: ['https://retwitzzz.vercel.app', 'http://localhost:3000']
  })
);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/posts', postRouter);
app.use('/comments', commentsRouter);

app.use('/images', express.static('./app/images'))

app.listen(port, () => {
  try {
    pool.connect()
    console.log('succesful database OK.')
  } catch (err) {
    console.error('ошибка подключения к бд.')
  }
  console.log(`app started in ${port} port`)
});
