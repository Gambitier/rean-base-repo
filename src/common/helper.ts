import * as os from 'os';
import { OSType } from '../domain.types/miscellaneous/system.types';
import { InputValidationError } from './input.validation.error';

export class Helper {
    static getOSType = () => {
        var type = os.type();
        switch (type) {
            case 'Darwin':
                return OSType.MacOS;
            case 'Linux':
                return OSType.Linux;
            case 'Windows_NT':
                return OSType.Windows;
            default:
                return OSType.Linux;
        }
    };

    static handleValidationError = (result) => {
        let index = 1;
        const errorMessages = [];
        for (const er of result.errors) {
            errorMessages.push(` ${index}. ${er.msg} - <${er.value}> for <${er.param}> in ${er.location}`);
            index++;
        }
        throw new InputValidationError(errorMessages);
    };
}
