import Functions from '../../functions';
declare class Animals {
    private token;
    constructor(token: string);
}
interface Animals {
    functions: Functions;
    dog(id?: number): Promise<any>;
    cat(id?: number): Promise<any>;
    wolf(id?: number): Promise<any>;
}
export default Animals;
//# sourceMappingURL=Animals.d.ts.map