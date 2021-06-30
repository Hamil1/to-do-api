import BaseController from './base.controller';
import AccountService from '../services/account.service';
import { autoInjectable } from 'tsyringe';
import logging from '../config/logging';
import { Request, Response, NextFunction } from 'express';
import bcryptjs from 'bcryptjs';
import auth from '../helpers/auth';

@autoInjectable()
export default class AccountController extends BaseController {
    service: AccountService;
    NAMESPACE = 'Account';
    constructor(service?: AccountService) {
        super(service);
    }

    validateToken = (req: Request, res: Response, next: NextFunction) => {
        logging.info(this.NAMESPACE, 'Token validated, user authorized.');

        return res.status(200).json({
            message: 'Token(s) validated'
        });
    };

    register = (req: Request, res: Response, next: NextFunction) => {
        let { username, password } = req.body;

        bcryptjs.hash(password, 10, (hashError, hash) => {
            if (hashError) {
                return res.status(401).json({
                    message: hashError.message,
                    error: hashError
                });
            }

            return this.service
                .register(username, hash)
                .then((user) => {
                    return res.status(201).json({
                        user
                    });
                })
                .catch((error) => {
                    logging.error(this.NAMESPACE, error);
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                });
        });
    };

    login = (req: Request, res: Response, next: NextFunction) => {
        let { username, password } = req.body;

        this.service
            .login(username)
            .then((users) => {
                if (users.length !== 1) {
                    return res.status(401).json({
                        message: 'Unauthorized'
                    });
                }

                bcryptjs.compare(password, users[0].password, (error, result) => {
                    if (error) {
                        return res.status(401).json({
                            message: 'Password Mismatch'
                        });
                    } else if (result) {
                        auth(users[0], (_error, token) => {
                            if (_error) {
                                return res.status(500).json({
                                    message: _error.message,
                                    error: _error
                                });
                            } else if (token) {
                                return res.status(200).json({
                                    message: 'Auth successful',
                                    token: token,
                                    user: users[0]
                                });
                            }
                        });
                    }
                });
            })
            .catch((err) => {
                logging.error(this.NAMESPACE, err);
                res.status(500).json({
                    error: err
                });
            });
    };
}
