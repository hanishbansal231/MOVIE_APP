import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from './middleware/errorHandler.js';
import userRouter from './routers/userRouter.js';
import movieRouter from './routers/movieRouter.js';
import categoryRouter from './routers/movieRouter.js';
import uploadRouter from './controllers/uploadFile.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send({ Message: 'Welcome Movie App...' });
});

app.use('/api/v1/user', userRouter);
app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/upload', uploadRouter);

app.all('*', (req, res) => {
    res.send('OOPS! Invalid Information');
});

app.use(errorHandler);

export default app;