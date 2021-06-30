import { Router } from 'express';
import TaskController from '../../controllers/task.controller';

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.get('/', taskController.get);
taskRouter.post('/', taskController.post);
taskRouter.get('/:id', taskController.getById);
taskRouter.delete('/:id', taskController.delete);
taskRouter.put('/:id', taskController.update);

export default taskRouter;
