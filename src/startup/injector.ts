import 'reflect-metadata';
import { DependencyContainer } from 'tsyringe';

import { DatabaseInjector } from '../database/database.injector';
import { ModuleInjector } from '../modules/module.injector';

//////////////////////////////////////////////////////////////////////////////////////////////////

export class Injector {
    static registerInjections(container: DependencyContainer) {
        //Database
        DatabaseInjector.registerInjections(container);

        //Modules
        ModuleInjector.registerInjections(container);
    }
}
