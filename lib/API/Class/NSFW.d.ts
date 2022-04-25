import Functions from '../../functions';
declare class NSFW {
    private token;
    constructor(token: string);
}
interface NSFW {
    functions: Functions;
    random(options?: object): Promise<any>;
    byID(id: string | number): Promise<any>;
    byCategory(category: "anal" | "ass" | "boobs" | "gonewild" | "hanal" | "hass" | "hboobs" | "hentai" | "hkitsune" | "hmidriff" | "hneko" | "hthigh" | "neko" | "paizuri" | "pgif" | "pussy" | "tentacle" | "thigh" | "yaoi"): Promise<any>;
}
export default NSFW;
//# sourceMappingURL=NSFW.d.ts.map