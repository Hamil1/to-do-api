import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3333;
const URL_MONGOOSE = process.env.URL_MONGOOSE || `mongodb://127.0.0.1:27017/to-do-api`;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    url_mongoose: URL_MONGOOSE
};

const config = {
    server: SERVER
};

export default config;
