import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('DATABASE');

export default () => {
    const connect = () => {
        mongoose.connect(`${config.DATABASE_URL}`).then(() => {
            log.info('DATABASE CONNECTED SUCCESSFULLY!');
        }).catch((error) => {
            log.error('ERROR CONNECTING DATABASE', error);
            return process.exit(1);
        });
    };
    connect();

    //just in case database Disconnects it will try connecting again
    mongoose.connection.on('disconnect', connect);

};
