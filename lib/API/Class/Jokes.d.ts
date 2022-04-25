import Functions from '../../functions';
declare class Jokes {
    private token;
    constructor(token: string);
}
interface Jokes {
    functions: Functions;
    random(options: object): Promise<any>;
    byID(id: string | number): Promise<any>;
    byCategory(category: "global" | "dev" | "dark" | "limit" | "beauf" | "blondes"): Promise<any>;
}
export default Jokes;
//# sourceMappingURL=Jokes.d.ts.map