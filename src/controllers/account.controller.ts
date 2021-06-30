import BaseController from './base.controller';
import AccountService from '../services/account.service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class AccountController extends BaseController {
    service: AccountService;
    constructor(service?: AccountService) {
        super(service);
    }
}
