import express, { json } from 'express';
import indexRouter from './routes';
import apiRouter from './routes/api';
import cors from 'cors';
import pool from './db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(
  cors({
    origin: ['https://retwitzzz.vercel.app', 'http://localhost:3000'],
  }),
);
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/images', express.static('./app/images'));

if (!port) {
  throw new Error('PORT must be defined');
} else {
  app.listen(port, async () => {
    try {
      await pool.connect();
      console.log('succesful database connection.');
    } catch (err) {
      console.error('error database connection.');
    }
    console.log(`app started in ${port} port`);
  });
}
