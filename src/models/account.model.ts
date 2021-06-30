import mongoose from 'mongoose';
import ModelI from '../interfaces/model.interface';
import AccountI from '../interfaces/account.interface';
import { injectable, singleton } from 'tsyringe';

@singleton()
@injectable()
export default class AccountModel implements ModelI {
    schema: mongoose.Schema<any> = new mongoose.Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

    model: mongoose.Model<any, any> = mongoose.model<AccountI>('accounts', this.schema);
}
