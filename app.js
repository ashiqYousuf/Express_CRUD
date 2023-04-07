import express from 'express';
import morgan from 'morgan';
import { join } from 'path';
import studentRouter from './routes/studentRouter.js';

const app = express();
// app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(join(process.cwd() , 'public')));
app.set('view engine' , 'ejs');
app.use(morgan('dev'));
app.use('/student' , studentRouter);

export default app;
