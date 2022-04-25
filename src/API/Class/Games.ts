import Functions from '../../functions';
import { Endpoints } from '../constants';

class Games {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    async minecraft(ip) {
        if(!ip) throw new Error('IP_IS_REQUIRED');
        if(typeof ip !== 'string') throw new Error('IP_IS_NOT_VALID');
        return await this.functions.get(Endpoints.Games._ + Endpoints.Games.Minecraft + `/${ip}`);
    };

    async garrysmod(ip) {
        if(!ip) throw new Error('IP_IS_REQUIRED');
        if(typeof ip !== 'string') throw new Error('IP_IS_NOT_VALID');
        return await this.functions.get(Endpoints.Games._ + Endpoints.Games.GarrysMod + `/${ip}`);
    };

    async fivem(ip) {
        if(!ip) throw new Error('IP_IS_REQUIRED');
        if(typeof ip !== 'string') throw new Error('IP_IS_NOT_VALID');
        return await this.functions.get(Endpoints.Games._ + Endpoints.Games.FiveM + `/${ip}`);
    };
};

interface Games {
    functions: Functions;
    minecraft(ip: string): Promise<any>;
    garrysmod(ip: string): Promise<any>;
    fivem(ip: string): Promise<any>;
};

export default Games;