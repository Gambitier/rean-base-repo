import { Logger } from '../../../common/logger';
import { ConfigurationManager } from '../../../config/configuration.manager';
import { IDatabaseConnector } from '../../database.connector.interface';
import { MysqlClient } from './dialect.clients/mysql.client';
import { PostgresqlClient } from './dialect.clients/postgresql.client';

//////////////////////////////////////////////////////////////

export class DatabaseConnector_Prisma implements IDatabaseConnector {
    private getClient() {
        const flavour = ConfigurationManager.DatabaseFlavour();

        if (flavour === 'MySQL') {
            return MysqlClient;
        }
        if (flavour === 'PostGreSQL') {
            return PostgresqlClient;
        }
        return PostgresqlClient;
    }

    async connect(): Promise<boolean> {
        try {
            await this.createDatabase();
            return true;
        } catch (error) {
            Logger.instance().log(error.message);
        }

        return false;
    }

    sync(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async createDatabase(): Promise<boolean> {
        try {
            const client = this.getClient();
            await client.createDb();
            return true;
        } catch (error) {
            Logger.instance().log(error.message);
        }
        return false;
    }

    dropDatabase(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    executeQuery(query: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    migrate(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
