import Functions from '../../functions';
import { Endpoints } from '../constants';

class Jokes {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    async random(options = null) {
        if(options && typeof options !== 'object') throw new TypeError('INVALID_TYPE');
        if (options && typeof options.disallow !== 'string' && !Array.isArray(options.disallow)) throw new TypeError('MUST_BE_TYPE');
        return await this.functions.get(Endpoints.Jokes._ + Endpoints.Functionals.Random, options);
    };
    async byID(id) {
        if(!id) throw new Error('ID_MISSING');
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(`${Endpoints.Jokes._}${Endpoints.Functionals.ByID}/${id}`);
    };
    async byCategory(category) {
        if(!category) throw new Error('TYPE_MISSING'); 
        if(typeof category !== 'string') throw new TypeError('INVALID_TYPE');
        if(!Object.keys({ "global": 0, "dev": 0, "dark": 0, "limit": 0, "beauf": 0, "blondes": 0 }).includes(category.toLowerCase())) throw new TypeError('INVALID_TYPE');
        return await this.functions.get(`${Endpoints.Jokes._}${Endpoints.Functionals.ByCategory}/${category}`);
    };
};

interface Jokes {
    functions: Functions;
    random(options: object): Promise<any>;
    byID(id: string | number): Promise<any>;
    byCategory(category: "global" | "dev" | "dark" | "limit" | "beauf" | "blondes"): Promise<any>;
};

export default Jokes;