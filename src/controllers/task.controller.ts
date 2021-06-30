import { Request, Response } from 'express';
import BaseController from './base.controller';
import TaskService from '../services/task.service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class TaskController extends BaseController {
    service: TaskService;
    constructor(service?: TaskService) {
        super(service);
    }

    update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const resource = await this.service.update(id, req.body);
        if (resource === null) {
            res.status(400).send({ message: 'No data found' });
            return;
        }
        res.send(resource);
    };
}
