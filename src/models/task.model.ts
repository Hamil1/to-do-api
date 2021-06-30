import mongoose from 'mongoose';
import ModelI from '../interfaces/model.interface';
import TaskI from '../interfaces/task.interface';
import { injectable, singleton } from 'tsyringe';

@singleton()
@injectable()
export default class TaskModel implements ModelI {
    schema: mongoose.Schema<any> = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        isComplete: {
            type: Number,
            required: true
        }
    });

    model: mongoose.Model<any, any> = mongoose.model<TaskI>('tasks', this.schema);
}
