import mongoose from "mongoose";
import { config } from './config';
export default () => {
    const connect = () => {
        mongoose.connect(`${config.DATABASE_URL}`).then(() => {
            console.log("DATABASE CONNECTED SUCCESSFULLY!");
        }).catch((error) => {
            console.log("ERROR CONNECTING DATABASE");
            return process.exit(1);
        })
    };
    connect();

    //just in case database Disconnects it will try connecting again
    mongoose.connection.on('disconnect', connect);

};