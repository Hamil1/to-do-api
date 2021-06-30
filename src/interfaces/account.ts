import mongoose from '../database';

export interface AccountI {
    email: string;
    password: string;
}

export default interface AccountsI extends AccountI, mongoose.Document {}
