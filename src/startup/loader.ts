import 'reflect-metadata';
import { container, DependencyContainer } from 'tsyringe';
import { Logger } from '../common/logger';
import { DatabaseConnector } from '../database/database.connector';
import { Injector } from './injector';

//////////////////////////////////////////////////////////////////////////////////////////////////

export class Loader {
    private static _databaseConnector: DatabaseConnector = null;

    private static _container: DependencyContainer = container;

    public static get databaseConnector() {
        return Loader._databaseConnector;
    }

    public static get container() {
        return Loader._container;
    }

    public static init = async (): Promise<boolean> => {
        try {
            //Register injections here...
            Injector.registerInjections(container);

            Loader._databaseConnector = container.resolve(DatabaseConnector);

            return true;
        } catch (error) {
            Logger.instance().log(error.message);
            return false;
        }
    };
}
