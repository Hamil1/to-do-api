import mongoose from '../database';
import AccountI from '../interfaces/account';
import AccountModel from '../models/account';
import BaseService from './base';

export default class AccountService extends BaseService<AccountI> {
    constructor(modelI?: AccountModel) {
        super(modelI);
    }

    post = async (data: any) => {
        const account = (await this.model.create(data)) as AccountI;
        if (account === null) throw new Error('No account found');
        console.log(account);
        return account;
    };
}
