import { injectable } from 'tsyringe';
import AccountSI from '../interfaces/account.interface';
import AccountModel from '../models/account.model';
import BaseService from './base.service';
import mongoose from 'mongoose';

@injectable()
export default class AccountService extends BaseService<AccountSI> {
    constructor(modelI?: AccountModel) {
        super(modelI);
    }

    register = async (username: string, hash: string) => {
        const resource = await this.model.create({
            _id: new mongoose.Types.ObjectId(),
            username,
            password: hash
        });
        return resource;
    };

    login = async (username: string) => {
        const resource = await this.model.find({ username }).exec();
        return resource;
    };
}
