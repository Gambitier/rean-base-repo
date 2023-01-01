import express from 'express';
import { Loader } from '../../startup/loader';

import { ResponseHandler } from '../../common/response.handler';
import { TestApiService } from '../../services/test.api/test.api.service';

///////////////////////////////////////////////////////////////////////////////////////

export class TestApiController {
    _service: TestApiService = null;

    constructor() {
        this._service = Loader.container.resolve(TestApiService);
    }

    post = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            request.context = 'TestApi.post';
            const message = 'TestApi.post found! response retrieved successfully!';

            ResponseHandler.success(request, response, message, 201, {
                data: {
                    result: true,
                },
            });
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    get = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            request.context = 'TestApi.get';

            const message = 'TestApi.get found! response retrieved successfully!';
            const data = await this._service.get();

            ResponseHandler.success(request, response, message, 200, {
                data: data,
            });
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };
}
