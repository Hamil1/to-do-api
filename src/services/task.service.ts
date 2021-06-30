import { injectable } from 'tsyringe';
import TaskSI from '../interfaces/task.interface';
import TaskModel from '../models/task.model';
import BaseService from './base.service';

@injectable()
export default class TaskService extends BaseService<TaskSI> {
    constructor(modelI?: TaskModel) {
        super(modelI);
    }

    update = async (id: string, body: any) => {
        console.log(`objeto que llega ${JSON.stringify(body)}`);

        const resource = await this.model.findByIdAndUpdate(id, body, { new: true });
        resource.save();
        return resource;
    };
}
