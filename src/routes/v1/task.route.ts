import { Router } from 'express';
import TaskController from '../../controllers/task.controller';
import auth from '../../middlewares/auth.middleware';

const taskRouter = Router();
const taskController = new TaskController();

//applying the auth middleware in every tasks route
taskRouter.get('*', auth);
taskRouter.post('*', auth);
taskRouter.put('*', auth);
taskRouter.delete('*', auth);

//Completed tasks routes
taskRouter.get('/completed', taskController.getCompletedTasks);
taskRouter.post('/completed/:id', taskController.setCompleted);
//Incomplete tasks routes
taskRouter.get('/incomplete', taskController.getIncompleteTasks);
taskRouter.post('/incomplete/:id', taskController.setIncomplete);
//General tasks routes
taskRouter.get('/', taskController.get);
taskRouter.post('/', taskController.post);
taskRouter.get('/:id', taskController.getById);
taskRouter.delete('/:id', taskController.delete);
taskRouter.put('/:id', taskController.update);

export default taskRouter;
