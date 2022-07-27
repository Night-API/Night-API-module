import Functions from '../../functions';
import { Endpoints } from '../constants';

class Captcha {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    async generate(codeSize: number = 6) {
        if(codeSize > 10 || codeSize < 4) throw new Error('The "codeSize" option must be between 4 and 10');
        if(isNaN(codeSize)) throw new Error('"codeSize" must be a Number');
        return await this.functions.get(`${Endpoints.Images._}${Endpoints.Images.Captcha._}`, { body: { codeSize } });
    }
};

interface Captcha {
    functions: Functions;
    generate(codeSize?: number): Promise<any>;
};

export default Captcha;