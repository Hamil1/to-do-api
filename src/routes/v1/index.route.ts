import { Router } from 'express';
import accountRouter from './account.route';

const mainRouter = Router();

//here we declare all the prefix of the routes
mainRouter.use('/account', accountRouter);

export default mainRouter;
