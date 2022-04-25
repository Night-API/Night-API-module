"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightAPI = void 0;
const functions_1 = __importDefault(require("./functions"));
const constants_1 = require("./API/constants");
const API_1 = require("./API");
class NightAPI {
    token;
    constructor(token) {
        this.token = token;
        if (!token)
            throw new Error('TOKEN_MISSING');
        if (typeof token !== 'string')
            throw new Error('TOKEN_INVALID');
        token = token.replace(/^(Api|Bearer|API)\s*/i, '');
        const functions = new functions_1.default(token);
        (async function () {
            const response = await (await functions.get(constants_1.Endpoints.TestToken));
            if (response.status !== 200)
                throw new Error('TOKEN_INVALID');
        })();
        this.jokes = new API_1.Jokes(token);
        this.animals = new API_1.Animals(token);
        this.sfw = new API_1.SFW(token);
        this.nsfw = new API_1.NSFW(token);
        this.games = new API_1.Games(token);
    }
    ;
}
exports.NightAPI = NightAPI;
;
// export default NightAPI;
//# sourceMappingURL=index.js.map