import mongoose from '../database';

export interface TaskI {
    name: string;
    isComplete: number;
}

export default interface TasksI extends TaskI, mongoose.Document {}
