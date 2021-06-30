import mongoose from 'mongoose';
import config from './config/config';

const uri = config.server.url_mongoose;

export const connectt = () => {
    return new Promise(function (fulfill, reject) {
        return mongoose.connect(
            uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                poolSize: 10,
                useFindAndModify: true
            },
            (err: any) => {
                if (err) {
                    reject(err);
                } else {
                    fulfill('Successfully Connected!');
                }
            }
        );
    });
};

export const disconnect = () => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV?.toString() == 'test') {
        return mongoose.connection.db.dropDatabase().then(() => {
            return mongoose.disconnect();
        });
    } else {
        return mongoose.disconnect();
    }
};

export default mongoose;
