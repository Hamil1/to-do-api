import app from './app';
import config from './config/config';
import logging from './config/logging';
import * as db from './database';

const NAMESPACE = 'Server';

db.connectt()
    .then((message) => {
        // launching the server
        console.log(message);

        app.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
    })
    .catch((e) => {
        logging.error(NAMESPACE, `DB Error: ${e.message}`);
    });
