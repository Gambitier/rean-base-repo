import { DependencyContainer } from 'tsyringe';
import { DatabaseConnector_Prisma } from './database.connector.prisma';

export class PrismaInjector {
    static registerInjections(container: DependencyContainer) {
        container.register('IDatabaseConnector', DatabaseConnector_Prisma);
    }
}
