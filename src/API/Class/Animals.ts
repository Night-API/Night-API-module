import Functions from '../../functions';
import { Endpoints } from '../constants';

class Animals {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    private async getAnimal(animal, id) {
        return new Promise(async (resolve, reject) => {
            if(!id) return this.functions.get(`${Endpoints.Images._}${Endpoints.Images.Animals._}/` + animal).then(resolve).catch(reject);
            if(isNaN(id)) return reject(new Error('The ID must be a Number'));
            return this.functions.get(`${Endpoints.Images._}${Endpoints.Images.Animals._}/` + animal + `/${id}`).then(resolve).catch(reject);
        });
    };

    dog(id) { return new Promise((resolve, reject) => this.getAnimal("dog", id).then(resolve).catch(reject)) };
    cat(id) { return new Promise((resolve, reject) => this.getAnimal("cat", id).then(resolve).catch(reject)) };
    fox(id) { return new Promise((resolve, reject) => this.getAnimal("fox", id).then(resolve).catch(reject)) };
    giraffe(id) { return new Promise((resolve, reject) => this.getAnimal("giraffe", id).then(resolve).catch(reject)) };
    kangaroo(id) { return new Promise((resolve, reject) => this.getAnimal("kangaroo", id).then(resolve).catch(reject)) };
    lion(id) { return new Promise((resolve, reject) => this.getAnimal("lion", id).then(resolve).catch(reject)) };
    quokka(id) { return new Promise((resolve, reject) => this.getAnimal("quokka", id).then(resolve).catch(reject)) };
    wolf(id) { return new Promise((resolve, reject) => this.getAnimal("wolf", id).then(resolve).catch(reject)) };
    lezard(id) { return new Promise((resolve, reject) => this.getAnimal("lezard", id).then(resolve).catch(reject)) };
    leopard(id) { return new Promise((resolve, reject) => this.getAnimal("leopard", id).then(resolve).catch(reject)) };
    singes(id) { return new Promise((resolve, reject) => this.getAnimal("singes", id).then(resolve).catch(reject)) };
    paon(id) { return new Promise((resolve, reject) => this.getAnimal("paon", id).then(resolve).catch(reject)) };
    hamster(id) { return new Promise((resolve, reject) => this.getAnimal("hamster", id).then(resolve).catch(reject)) };
};

interface Animals {
    functions: Functions;
    dog(id?: number): Promise<any>;
    cat(id?: number): Promise<any>;
    wolf(id?: number): Promise<any>;
    fox(id?: number): Promise<any>;
    giraffe(id?: number): Promise<any>;
    kangaroo(id?: number): Promise<any>;
    lion(id?: number): Promise<any>;
    quokka(id?: number): Promise<any>;
    lezard(id?: number): Promise<any>;
    leopard(id?: number): Promise<any>;
    singes(id?: number): Promise<any>;
    paon(id?: number): Promise<any>;
    hamster(id?: number): Promise<any>;
};

export default Animals;