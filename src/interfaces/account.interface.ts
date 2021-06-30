import mongoose from '../database';

export interface AccountI {
    email: string;
    password: string;
}

export default interface AccountSI extends AccountI, mongoose.Document {}
