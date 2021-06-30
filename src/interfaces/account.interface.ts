import mongoose from '../database';

export interface AccountI {
    username: string;
    password: string;
}

export default interface AccountSI extends AccountI, mongoose.Document {}
