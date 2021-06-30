import { Model, model, Schema } from 'mongoose';
import ModelI from '../interfaces/model';
import AccountI from '../interfaces/account';

export default class AccountModel implements ModelI {
    schema: Schema<any> = new Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

    model: Model<any, any> = model<AccountI>('accounts', this.schema);
}
