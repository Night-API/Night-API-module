import { http } from './API/constants';
import axios from 'axios';

class Functions {
    constructor(private token: string) { };

    private _convertQueryOptions(options) {
        if (typeof options !== 'object') throw new TypeError('MUST_BE_TYPE');
        if (typeof options.disallow !== 'string' && !Array.isArray(options.disallow)) throw new TypeError('MUST_BE_TYPE');
        const disallow = typeof options.disallow === 'string' ? [options.disallow] : options.disallow;
        return '?' + disallow.map(function (type) { return 'disallow=' + type; }).join('&');
    };
    public get(endpoint, options = null) {
        let url = `${http.api}/v${http.version}/${endpoint}`; 
        endpoint == "/test-token" ? url = `${http.api}${endpoint}` : url;
        if (options) url += this._convertQueryOptions(options); 
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: this._getHeaders() })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    };
    private _getHeaders() { return { Authorization: `${this.token}` }; };
};

interface Functions {
    get(endpoint: string, options?: object): Promise<any>;
};

export = Functions;