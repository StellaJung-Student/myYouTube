import express from 'express';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';
import routes from './routes';
import middlewares from './middlewares';

const app = express();

// middlewares
middlewares(app);

// routing
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

app.listen(5000, () => {
  console.log(`server working @ http://localhost:5000`);
});

