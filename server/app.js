import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from './middleware/errorHandler.js';


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials: true,
}));

app.get('/',(req,res) => {
    res.send({Message:'Welcome Movie App...'});
});

app.all('*',(req,res) => {
    res.send('OOPS! Invalid Information');
});

app.use(errorHandler);

export default app;