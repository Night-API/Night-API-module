"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __importDefault(require("../../functions"));
const constants_1 = require("../constants");
class Games {
    token;
    constructor(token) {
        this.token = token;
        this.functions = new functions_1.default(this.token);
    }
    ;
    async minecraft(ip) {
        if (!ip)
            throw new Error('IP_IS_REQUIRED');
        if (typeof ip !== 'string')
            throw new Error('IP_IS_NOT_VALID');
        return await this.functions.get(constants_1.Endpoints.Games._ + constants_1.Endpoints.Games.Minecraft + `/${ip}`);
    }
    ;
    async garrysmod(ip) {
        if (!ip)
            throw new Error('IP_IS_REQUIRED');
        if (typeof ip !== 'string')
            throw new Error('IP_IS_NOT_VALID');
        return await this.functions.get(constants_1.Endpoints.Games._ + constants_1.Endpoints.Games.GarrysMod + `/${ip}`);
    }
    ;
    async fivem(ip) {
        if (!ip)
            throw new Error('IP_IS_REQUIRED');
        if (typeof ip !== 'string')
            throw new Error('IP_IS_NOT_VALID');
        return await this.functions.get(constants_1.Endpoints.Games._ + constants_1.Endpoints.Games.FiveM + `/${ip}`);
    }
    ;
}
;
;
exports.default = Games;
//# sourceMappingURL=Games.js.map