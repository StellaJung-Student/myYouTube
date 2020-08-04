import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';
import routes from './routes';
import middlewares from './middlewares';
import './models/mongodb';

dotenv.config();

const app = express();

// middlewares
middlewares(app);

// routing
app.use(express.static(`${__dirname}/uploads/videos`));
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
