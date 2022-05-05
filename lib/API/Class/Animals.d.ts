import Functions from '../../functions';
declare class Animals {
    private token;
    constructor(token: string);
    fox(id: any): Promise<any>;
    giraffe(id: any): Promise<any>;
    kangaroo(id: any): Promise<any>;
    lion(id: any): Promise<any>;
    quokka(id: any): Promise<any>;
}
interface Animals {
    functions: Functions;
    dog(id?: number): Promise<any>;
    cat(id?: number): Promise<any>;
    wolf(id?: number): Promise<any>;
}
export default Animals;
//# sourceMappingURL=Animals.d.ts.map