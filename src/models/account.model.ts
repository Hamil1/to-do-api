import mongoose from 'mongoose';
import ModelI from '../interfaces/model.interface';
import AccountI from '../interfaces/account.interface';
import { injectable, singleton } from 'tsyringe';

@singleton()
@injectable()
export default class AccountModel implements ModelI {
    schema: mongoose.Schema<any> = new mongoose.Schema(
        {
            username: {
                type: String,
                unique: true,
                required: true,
                lowercase: true,
                trim: true
            },
            password: {
                type: String,
                required: true
            }
        },
        {
            timestamps: true
        }
    );
    model: mongoose.Model<any, any> = mongoose.model<AccountI>('accounts', this.schema);
}
