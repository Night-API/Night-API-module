import Functions from '../../functions';
declare class Games {
    private token;
    constructor(token: string);
}
interface Games {
    functions: Functions;
    minecraft(ip: string): Promise<any>;
    garrysmod(ip: string): Promise<any>;
    fivem(ip: string): Promise<any>;
}
export default Games;
//# sourceMappingURL=Games.d.ts.map