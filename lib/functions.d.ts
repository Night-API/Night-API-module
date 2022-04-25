declare class Functions {
    private token;
    constructor(token: string);
    private _convertQueryOptions;
    private _getHeaders;
}
interface Functions {
    get(endpoint: string, options?: object): Promise<any>;
}
export = Functions;
//# sourceMappingURL=functions.d.ts.map