import { PrismaClient } from '@prisma/client';

// add prisma to the NodeJS global type
// TODO : downgraded @types/node to 14.17.0 to avoid error on NodeJS.Global
interface CustomNodeJsGlobal extends NodeJS.Global {
    prismaClient: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prismaClient = global.prismaClient || new PrismaClient();

if (process.env.NODE_ENV === 'local') {
    global.prismaClient = prismaClient;
}

export default prismaClient;
