import 'reflect-metadata';
import http, { createServer } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import router from './routes/router';
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
const LocalStrategy = require('passport-local').Strategy;

let app = express();
const NAMESPACE = 'App';

/** Logging the request */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

// //passport config
// app.use(passport.initialize());
// let Account = require('./model/account');
// passport.use(
//     new LocalStrategy(
//         {
//             usernameField: 'email',
//             passwordField: 'password'
//         },
//         Account.authenticate()
//     )
// );

// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

app.use(router);

// validating 401 middleware
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ code: 401, message: 'invalid token...' });
    }
    next();
});

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(app);

export default http.createServer(app);
