const { Endpoints} = require('./constants.js'), fetch = require('node-fetch');

class Functions {
    constructor(token) {
        this.token = token;
    }
    _convertOptions(options) {
        if (typeof options !== 'object') throw new TypeError('MUST_BE_TYPE', 'option', 'Object');
        if (typeof options.disallow !== 'string' && !Array.isArray(options.disallow)) throw new TypeError('MUST_BE_TYPE', 'disallow', 'Array or String');
        const disallow = typeof options.disallow === 'string' ? [options.disallow] : options.disallow;
        return '?' + disallow.map(function (type) { return 'disallow=' + type; }).join('&');
      };
      get = function (endpoint, options) {
        let url = Endpoints.BASE + endpoint; if (options) url += this._convertOptions(options); return fetch(url, { headers: this._getHeaders() });
      };
      _getHeaders() { return { Authorization: `${this.token}` }; };
};
module.exports = Functions;