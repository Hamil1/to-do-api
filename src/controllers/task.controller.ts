import { Request, Response } from 'express';
import BaseController from './base.controller';
import TaskService from '../services/task.service';
import { autoInjectable } from 'tsyringe';
import logging from '../config/logging';

@autoInjectable()
export default class TaskController extends BaseController {
    NAMESPACE: 'TASKCONTROLLER';
    service: TaskService;
    constructor(service?: TaskService) {
        super(service);
    }

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const resource = await this.service.update(id, req.body);
            if (resource === null) {
                res.status(400).send({ message: 'No data found' });
                return;
            }
            res.send(resource);
        } catch (error) {
            logging.error(this.NAMESPACE, error);
            res.status(404).json({ message: 'this task does not exist' });
        }
    };

    setCompleted = async (req: Request, res: Response) => {
        const { id } = req.params;
        const resource = await this.service.update(id, { isComplete: 1 });
        if (resource === null) {
            res.status(400).send({ message: 'No data found' });
            return;
        }
        res.send(resource);
    };

    setIncomplete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const resource = await this.service.update(id, { isComplete: 0 });
        if (resource === null) {
            res.status(400).send({ message: 'No data found' });
            return;
        }
        res.send(resource);
    };

    getIncompleteTasks = async (req: Request, res: Response) => {
        const filter = { isComplete: 0 };
        const resource = await this.service.get(filter);
        if (resource === null) {
            res.status(400).send({ message: 'No data found' });
            return;
        }
        res.send(resource);
    };

    getCompletedTasks = async (req: Request, res: Response) => {
        const filter = { isComplete: 1 };
        const resource = await this.service.get(filter);
        if (resource === null) {
            res.status(400).send({ message: 'No data found' });
            return;
        }
        res.send(resource);
    };
}
