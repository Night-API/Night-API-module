import Functions from '../../functions';
import { Endpoints } from '../constants';

class Animals {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    async dog(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.dog);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.dog + `/${id}`);
    };

    async cat(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.cat);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.cat + `/${id}`);
    };

    async fox(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.fox);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.fox + `/${id}`);
    };

    async giraffe(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.giraffe);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.giraffe + `/${id}`);
    };

    async kangaroo(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.kangaroo);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.kangaroo + `/${id}`);
    };

    async lion(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.lion);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.lion + `/${id}`);
    };

    async quokka(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.quokka);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.quokka + `/${id}`);
    };

    async wolf(id) {
        if(!id) return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.wolf);
        if(isNaN(id)) throw new Error('ID_IS_NAN');
        return await this.functions.get(Endpoints.Images._ + Endpoints.Images.Animals.wolf + `/${id}`);
    };
};

interface Animals {
    functions: Functions;
    dog(id?: number): Promise<any>;
    cat(id?: number): Promise<any>;
    wolf(id?: number): Promise<any>;
};

export default Animals;