import Functions from '../../functions';
import { Endpoints } from '../constants';

class Jokes {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    async random(options = null) {
        if(options && typeof options !== 'object') throw new TypeError('The options must be an object');
        if (options && typeof options.disallow !== 'string' && !Array.isArray(options.disallow)) throw new TypeError('The options "disallow" must be an array or a string');
        return await this.functions.get(Endpoints.Jokes._ + Endpoints.Functionals.Random, { query: options });
    };
    async byID(id) {
        if(!id) throw new Error('The joke ID is missing');
        if(isNaN(id)) throw new Error('The ID must be a Number');
        return await this.functions.get(`${Endpoints.Jokes._}${Endpoints.Functionals.ByID}/${id}`);
    };
    async byCategory(category) {
        if(!category) throw new Error('The joke Type is missing'); 
        if(typeof category !== 'string') throw new TypeError('The options "category" must be an string');
        if(!["global", "dev", "dark", "limit", "beauf", "blondes"].includes(category.toLowerCase())) throw new TypeError('Invalid "category" type provided');
        return await this.functions.get(`${Endpoints.Jokes._}${Endpoints.Functionals.ByCategory}/${category}`);
    };
};

interface Jokes {
    functions: Functions;
    random(options: RandomOptions): Promise<any>;
    byID(id: string | number): Promise<any>;
    byCategory(category: "global" | "dev" | "dark" | "limit" | "beauf" | "blondes"): Promise<any>;
};

interface RandomOptions {
    disallow?: "global" | "dev" | "dark" | "limit" | "beauf" | "blondes" | ["global" | "dev" | "dark" | "limit" | "beauf" | "blondes"];
}

export default Jokes;