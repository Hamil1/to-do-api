import { injectable } from 'tsyringe';
import AccountSI from '../interfaces/account.interface';
import AccountModel from '../models/account.model';
import BaseService from './base.service';

@injectable()
export default class AccountService extends BaseService<AccountSI> {
    constructor(modelI?: AccountModel) {
        super(modelI);
    }
}
