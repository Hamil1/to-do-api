import { Router } from 'express';
import AccountController from '../../controllers/account.controller';
import auth from '../../middlewares/auth.middleware';

const accountRouter = Router();
const accountController = new AccountController();

//applying the auth middleware to all below routes
accountRouter.get('*', auth);
accountRouter.delete('*', auth);

accountRouter.get('/', accountController.get);
accountRouter.post('/register', accountController.register);

accountRouter.post('/login', accountController.login);
accountRouter.get('/:id', accountController.getById);
accountRouter.delete('/:id', accountController.delete);

export default accountRouter;
