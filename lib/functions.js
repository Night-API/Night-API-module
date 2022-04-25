"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const constants_1 = require("./API/constants");
const axios_1 = __importDefault(require("axios"));
class Functions {
    token;
    constructor(token) {
        this.token = token;
    }
    ;
    _convertQueryOptions(options) {
        if (typeof options !== 'object')
            throw new TypeError('MUST_BE_TYPE');
        if (typeof options.disallow !== 'string' && !Array.isArray(options.disallow))
            throw new TypeError('MUST_BE_TYPE');
        const disallow = typeof options.disallow === 'string' ? [options.disallow] : options.disallow;
        return '?' + disallow.map(function (type) { return 'disallow=' + type; }).join('&');
    }
    ;
    get(endpoint, options = null) {
        let url = `${constants_1.http.api}/v${constants_1.http.version}/${endpoint}`;
        endpoint == "/test-token" ? url = `${constants_1.http.api}${endpoint}` : url;
        if (options)
            url += this._convertQueryOptions(options);
        return new Promise((resolve, reject) => {
            axios_1.default.get(url, { headers: this._getHeaders() })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
    ;
    _getHeaders() { return { Authorization: `${this.token}` }; }
    ;
}
;
;
module.exports = Functions;
//# sourceMappingURL=functions.js.map