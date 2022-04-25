"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __importDefault(require("../../functions"));
const constants_1 = require("../constants");
class Animals {
    token;
    constructor(token) {
        this.token = token;
        this.functions = new functions_1.default(this.token);
    }
    ;
    async dog(id) {
        if (!id)
            return await this.functions.get(constants_1.Endpoints.Images._ + constants_1.Endpoints.Images.Animals.dog);
        if (isNaN(id))
            throw new Error('ID_IS_NAN');
        return await this.functions.get(constants_1.Endpoints.Images._ + constants_1.Endpoints.Images.Animals.dog + `/${id}`);
    }
    ;
    async cat(id) {
        if (!id)
            return await this.functions.get(constants_1.Endpoints.Images._ + constants_1.Endpoints.Images.Animals.cat);
        if (isNaN(id))
            throw new Error('ID_IS_NAN');
        return await this.functions.get(constants_1.Endpoints.Images._ + constants_1.Endpoints.Images.Animals.cat + `/${id}`);
    }
    ;
    async wolf(id) {
        if (!id)
            return await this.functions.get(constants_1.Endpoints.Images._ + constants_1.Endpoints.Images.Animals.wolf);
        if (isNaN(id))
            throw new Error('ID_IS_NAN');
        return await this.functions.get(constants_1.Endpoints.Images._ + constants_1.Endpoints.Images.Animals.wolf + `/${id}`);
    }
    ;
}
;
;
exports.default = Animals;
//# sourceMappingURL=Animals.js.map