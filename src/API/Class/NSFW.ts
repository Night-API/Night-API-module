import Functions from '../../functions';
import { Endpoints } from '../constants';

class NSFW {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    async random(options = null) {
        if(options && typeof options !== 'object') throw new TypeError('INVALID_TYPE');
        if (options && typeof options.disallow !== 'string' && !Array.isArray(options.disallow)) throw new TypeError('MUST_BE_TYPE');
        return await this.functions.get(`${Endpoints.Images._}${Endpoints.Images.NSFW._}${Endpoints.Functionals.Random}`, options);
    };
    async byID(id) {
        if(!id) throw new Error('ID_MISSING');
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(`${Endpoints.Images._}${Endpoints.Images.NSFW._}${Endpoints.Functionals.ByID}/${id}`);
    };
    async byCategory(category) {
        if(!category) throw new Error('TYPE_MISSING'); 
        if(typeof category !== 'string') throw new TypeError('INVALID_TYPE');
        if(!Object.keys({ "anal": 0, "ass": 0, "boobs": 0, "gonewild": 0, "hanal": 0, "hass": 0, "hboobs": 0, "hentai": 0, "hkitsune": 0, "hmidriff": 0, "hneko": 0, "hthigh": 0, "neko": 0, "paizuri": 0, "pgif": 0, "pussy": 0, "tentacle": 0, "thigh": 0, "yaoi": 0 }).includes(category.toLowerCase())) throw new TypeError('INVALID_TYPE');
        return await this.functions.get(`${Endpoints.Images._}${Endpoints.Images.NSFW._}${Endpoints.Functionals.ByCategory}/${category}`);
    };
};

interface NSFW {
    functions: Functions;
    random(options?: object): Promise<any>;
    byID(id: string | number): Promise<any>;
    byCategory(category: "anal" | "ass" | "boobs" | "gonewild" | "hanal" | "hass" | "hboobs" | "hentai" | "hkitsune" | "hmidriff" | "hneko" | "hthigh" | "neko" | "paizuri" | "pgif" | "pussy" | "tentacle" | "thigh" | "yaoi"): Promise<any>;
};

export default NSFW;