import { Router } from 'express';
import accountRouter from './account.route';
import taskRouter from './task.route';

const mainRouter = Router();

//here we declare all the prefix of the routes
mainRouter.use('/account', accountRouter);
mainRouter.use('/task', taskRouter);

export default mainRouter;
