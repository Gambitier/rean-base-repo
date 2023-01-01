import * as dotenv from 'dotenv';
import { Logger } from '../../../common/logger';

/////////////////////////////////////////////////////////////////////////////

if (typeof process.env.NODE_ENV === 'undefined') {
    dotenv.config();
}

export class DbConfig {
    public static config = DbConfig.getConfig();

    public static getConfig() {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            throw new Error('DATABASE_URL is not configured!');
        }
        // "postgresql://postgres:toor@localhost:5432/mydb?schema=public"
        const dialect = dbUrl.split('://')[0];
        const userNameAndPassword = dbUrl.split('://')[1].split('@')[0];
        const serverAndPort = dbUrl.split('://')[1].split('@')[1].split('/')[0];
        const databaseNameAndSchema = dbUrl.split('://')[1].split('@')[1].split('/')[1];

        const username = userNameAndPassword.split(':')[0];
        const password = userNameAndPassword.split(':')[1];
        const host = serverAndPort.split(':')[0];
        const port = Number(serverAndPort.split(':')[1]);
        const database = databaseNameAndSchema.split('?')[0];

        const config = {
            username: username,
            password: password,
            database: database,
            host: host,
            dialect: dialect,
            port: port,
        };

        return config;
    }
}

if (process.env.NODE_ENV === 'test') {
    const config = DbConfig.getConfig();
    Logger.instance().log('================================================');
    Logger.instance().log('Environment   : ' + process.env.NODE_ENV);
    Logger.instance().log('Database name : ' + config.database);
    Logger.instance().log('Database user : ' + config.username);
    Logger.instance().log('Database host : ' + config.host);
    Logger.instance().log('================================================');
}
