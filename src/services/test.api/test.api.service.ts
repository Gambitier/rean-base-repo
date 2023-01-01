import { injectable } from 'tsyringe';

////////////////////////////////////////////////////////////////////////////////////////////////////////

@injectable()
export class TestApiService {
    async get() {
        return {
            result: true,
        };
    }
}
