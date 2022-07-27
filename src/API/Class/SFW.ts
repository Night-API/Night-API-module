import Functions from '../../functions';
import { Endpoints } from '../constants';

class SFW {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    private async getImage(sfw, id) {
        return new Promise(async (resolve, reject) => {
            if(!id) return this.functions.get(`${Endpoints.Images._}${Endpoints.Images.SFW._}/` + sfw).then(resolve).catch(reject);
            if(isNaN(id)) return reject(new Error('The ID must be a Number'));
            return this.functions.get(`${Endpoints.Images._}${Endpoints.Images.SFW._}/` + sfw + `/${id}`).then(resolve).catch(reject);
        });
    };

    coffee(id) { return new Promise((resolve, reject) => this.getImage("coffee", id).then(resolve).catch(reject)) };
    food(id) { return new Promise((resolve, reject) => this.getImage("food", id).then(resolve).catch(reject)) };
    holo(id) { return new Promise((resolve, reject) => this.getImage("holo", id).then(resolve).catch(reject)) };
    kanna(id) { return new Promise((resolve, reject) => this.getImage("kanna", id).then(resolve).catch(reject)) };
};

interface SFW {
    functions: Functions;
    coffee(id?: number): Promise<any>;
    food(id?: number): Promise<any>;
    holo(id?: number): Promise<any>;
    kanna(id?: number): Promise<any>;
};

export default SFW;