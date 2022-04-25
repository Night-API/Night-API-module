declare function reg(sym: any, val: any): void;
declare const _default: {
    reg: typeof reg;
    Error: {
        new (key: string, ...args: any[]): {
            readonly name: string;
            readonly code: any;
        };
    };
    TypeError: {
        new (key: string, ...args: any[]): {
            readonly name: string;
            readonly code: any;
        };
    };
    RangeError: {
        new (key: string, ...args: any[]): {
            readonly name: string;
            readonly code: any;
        };
    };
};
export default _default;
//# sourceMappingURL=NightAPIErrors.d.ts.map