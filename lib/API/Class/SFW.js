"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __importDefault(require("../../functions"));
const constants_1 = require("../constants");
class SFW {
    token;
    constructor(token) {
        this.token = token;
        this.functions = new functions_1.default(this.token);
    }
    ;
    async random(options = null) {
        if (options && typeof options !== 'object')
            throw new TypeError('INVALID_TYPE');
        if (options && typeof options.disallow !== 'string' && !Array.isArray(options.disallow))
            throw new TypeError('MUST_BE_TYPE');
        return await this.functions.get(`${constants_1.Endpoints.Images._}${constants_1.Endpoints.Images.SFW._}${constants_1.Endpoints.Functionals.Random}`, options);
    }
    ;
    async byID(id) {
        if (!id)
            throw new Error('ID_MISSING');
        if (isNaN(id))
            throw new Error('ID_IS_NAN');
        return await this.functions.get(`${constants_1.Endpoints.Images._}${constants_1.Endpoints.Images.SFW._}${constants_1.Endpoints.Functionals.ByID}/${id}`);
    }
    ;
    async byCategory(category) {
        if (!category)
            throw new Error('TYPE_MISSING');
        if (typeof category !== 'string')
            throw new TypeError('INVALID_TYPE');
        if (!Object.keys({ "coffe": 0, "food": 0, "holo": 0, "kanna": 0 }).includes(category.toLowerCase()))
            throw new TypeError('INVALID_TYPE');
        return await this.functions.get(`${constants_1.Endpoints.Images._}${constants_1.Endpoints.Images.SFW._}${constants_1.Endpoints.Functionals.ByCategory}/${category}`);
    }
    ;
}
;
;
exports.default = SFW;
//# sourceMappingURL=SFW.js.map