import mongoose from '../database';

export interface TaskI {
    name: string;
    isComplete: number;
}

export default interface TaskSI extends TaskI, mongoose.Document {}
