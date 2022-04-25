import Functions from '../../functions';
declare class SFW {
    private token;
    constructor(token: string);
}
interface SFW {
    functions: Functions;
    random(options?: object): Promise<any>;
    byID(id: string | number): Promise<any>;
    byCategory(category: "coffe" | "food" | "holo" | "kanna"): Promise<any>;
}
export default SFW;
//# sourceMappingURL=SFW.d.ts.map