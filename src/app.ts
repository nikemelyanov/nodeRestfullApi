import express, { json } from 'express';
import indexRouter from './routes/index.js';
import authRouter from './routes/userRoutes/auth/index.js';

const app = express();
const port = process.env.port || 3000;

app.use(json());
app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(port, () => console.log(`app started in ${port} port`));
