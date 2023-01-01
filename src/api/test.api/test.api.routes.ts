import express from 'express';
import { TestApiController } from './test.api.controller';

export const register = (app: express.Application): void => {
    const router = express.Router();
    const controller = new TestApiController();

    router.post('/', controller.post);
    router.get('/', controller.get);

    app.use('/api/v1/test-api', router);
};
