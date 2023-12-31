import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/users.router.js'
import logMiddleware from './middlewares/log.middleware.js';
import errorHandlingMiddleware from './middlewares/error.handling.middleware.js';
import PostsRouter from './routes/posts.router.js'
import CommentRouter from './routes/comments.router.js'

const app = express();
const PORT = 3018;

app.use(logMiddleware)
app.use(express.json());
app.use(cookieParser());
app.use('/api', [userRouter, PostsRouter, CommentRouter]);
app.use(errorHandlingMiddleware)

app.listen(PORT, () => {
    console.log(PORT, '포트로 서버가 열렸어요!');
});