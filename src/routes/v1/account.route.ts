import { Router } from 'express';
import AccountController from '../../controllers/account.controller';

const accountRouter = Router();
const accountController = new AccountController();

accountRouter.get('/', accountController.get);
accountRouter.post('/', accountController.post);
accountRouter.get('/:id', accountController.getById);
accountRouter.delete('/:id', accountController.delete);

export default accountRouter;
