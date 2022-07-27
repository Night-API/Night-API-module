import Functions from '../../functions';
import { Endpoints } from '../constants';

class Games {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    private async getServer(serverType, ip) {
        return new Promise(async (resolve, reject) => {
            if(!ip) throw new Error('The IP is required for Games servers');
            if(typeof ip !== 'string') throw new Error('The IP must be a valid IP address for Games servers. The parameter must be a string');
            return this.functions.get(Endpoints.Games._ + serverType + `/${ip}`).then(resolve).catch(reject);
        });
    };

    async minecraft(ip) { return new Promise((resolve, reject) => this.getServer(Endpoints.Games.Minecraft, ip).then(resolve).catch(reject)) };
    async garrysmod(ip) { return new Promise((resolve, reject) => this.getServer(Endpoints.Games.GarrysMod, ip).then(resolve).catch(reject)) };
    async fivem(ip) { return new Promise((resolve, reject) => this.getServer(Endpoints.Games.FiveM, ip).then(resolve).catch(reject)) };
};

interface Games {
    functions: Functions;
    minecraft(ip: string): Promise<any>;
    garrysmod(ip: string): Promise<any>;
    fivem(ip: string): Promise<any>;
};

export default Games;