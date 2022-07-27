import Functions from '../../functions';
import { Endpoints } from '../constants';

class NSFW {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    private async getImage(nsfw, id) {
        return new Promise(async (resolve, reject) => {
            if(!id) return this.functions.get(`${Endpoints.Images._}${Endpoints.Images.NSFW._}/` + nsfw).then(resolve).catch(reject);
            if(isNaN(id)) return reject(new Error('The ID must be a Number'));
            return this.functions.get(`${Endpoints.Images._}${Endpoints.Images.NSFW._}/` + nsfw + `/${id}`).then(resolve).catch(reject);
        });
    };

    anal(id) { return new Promise((resolve, reject) => this.getImage("anal", id).then(resolve).catch(reject)) };
    ass(id) { return new Promise((resolve, reject) => this.getImage("ass", id).then(resolve).catch(reject)) };
    boobs(id) { return new Promise((resolve, reject) => this.getImage("boobs", id).then(resolve).catch(reject)) };
    gonewild(id) { return new Promise((resolve, reject) => this.getImage("gonewild", id).then(resolve).catch(reject)) };
    hanal(id) { return new Promise((resolve, reject) => this.getImage("hanal", id).then(resolve).catch(reject)) };
    hass(id) { return new Promise((resolve, reject) => this.getImage("hass", id).then(resolve).catch(reject)) };
    hboobs(id) { return new Promise((resolve, reject) => this.getImage("hboobs", id).then(resolve).catch(reject)) };
    hentai(id) { return new Promise((resolve, reject) => this.getImage("hentai", id).then(resolve).catch(reject)) };
    hkitsune(id) { return new Promise((resolve, reject) => this.getImage("hkitsune", id).then(resolve).catch(reject)) };
    hmidriff(id) { return new Promise((resolve, reject) => this.getImage("hmidriff", id).then(resolve).catch(reject)) };
    hneko(id) { return new Promise((resolve, reject) => this.getImage("hneko", id).then(resolve).catch(reject)) };
    hthigh(id) { return new Promise((resolve, reject) => this.getImage("hthigh", id).then(resolve).catch(reject)) };
    neko(id) { return new Promise((resolve, reject) => this.getImage("neko", id).then(resolve).catch(reject)) };
    paizuri(id) { return new Promise((resolve, reject) => this.getImage("paizuri", id).then(resolve).catch(reject)) };
    pgif(id) { return new Promise((resolve, reject) => this.getImage("pgif", id).then(resolve).catch(reject)) };
    pussy(id) { return new Promise((resolve, reject) => this.getImage("pussy", id).then(resolve).catch(reject)) };
    tentacle(id) { return new Promise((resolve, reject) => this.getImage("tentacle", id).then(resolve).catch(reject)) };
    thigh(id) { return new Promise((resolve, reject) => this.getImage("thigh", id).then(resolve).catch(reject)) };
    yaoi(id) { return new Promise((resolve, reject) => this.getImage("yaoi", id).then(resolve).catch(reject)) };
};

interface NSFW {
    functions: Functions;
    anal(id: number): Promise<any>;
    ass(id: number): Promise<any>;
    boobs(id: number): Promise<any>;
    gonewild(id: number): Promise<any>;
    hanal(id: number): Promise<any>;
    hass(id: number): Promise<any>;
    hboobs(id: number): Promise<any>;
    hentai(id: number): Promise<any>;
    hkitsune(id: number): Promise<any>;
    hmidriff(id: number): Promise<any>;
    hneko(id: number): Promise<any>;
    hthigh(id: number): Promise<any>;
    neko(id: number): Promise<any>;
    paizuri(id: number): Promise<any>;
    pgif(id: number): Promise<any>;
    pussy(id: number): Promise<any>;
    tentacle(id: number): Promise<any>;
    thigh(id: number): Promise<any>;
    yaoi(id: number): Promise<any>;
};

export default NSFW;