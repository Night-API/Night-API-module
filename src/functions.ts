import { http } from './API/constants';
import axios from 'axios';

class Functions {
    constructor(private token: string) { };

    private _convertQueryOptions(options) {
        if (typeof options !== 'object') throw new TypeError('The options must be an object');
        if (typeof options.disallow !== 'string' && !Array.isArray(options.disallow)) throw new TypeError('The option "disallow" must be an Array or String');
        const disallow = typeof options.disallow === 'string' ? [options.disallow] : options.disallow;
        return '?' + disallow.map(function (type) { return 'disallow=' + type; }).join('&');
    };

    public get(endpoint, options = null) {
        let url = `${http.api}${endpoint}`;
        
        if (options?.query) url += this._convertQueryOptions(options.query); 
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: this._getHeaders(), data: options?.body })
                .then(res => resolve(res.data))
                .catch(err => err?.response ? reject(err?.response?.data) : reject(err));
        });
    };
    
    private _getHeaders() { return { Authorization: `${this.token}` }; };
};

interface Functions {
    get(endpoint: string, options?: Functions_options): Promise<any>;
};

interface Functions_options {
    query?: object;
    body?: object;
}

export = Functions;