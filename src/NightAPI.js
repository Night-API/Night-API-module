const { Error, TypeError, RangeError } = require('../Errors'), { Endpoints, Category, Categories } = require('./constants'), Functions = require('./functions'), fetch = require('node-fetch');

/**
 * The NightAPI class.
 * Login to the API with the API key.
 * @param {NightOptions} [token] - Options for the client.
 * If not specified, the client create an error.
 */
class NightAPI {
  constructor(token) {
    if(!token) throw new Error('TOKEN_MISSING'); 
    if (typeof token !== 'string') throw new Error('TOKEN_INVALID'); 
    this.token = token = token.replace(/^(Api|Bearer|API)\s*/i, ''); 
    /**
     * @private
     * @returns {Object}
    */
    async function testToken() { const response = await (await fetch(Endpoints.BASE + Endpoints.TEST_TOKEN, { headers: { Authorization: `${token}` } })).json(); 
    if(response.status !== 200) throw new Error('TOKEN_INVALID'); 
    }; testToken();
    this.functions = new Functions(this.token);
  };

  jokes = {
    random: (async function (disallow) { return (await this.functions.get(`${Endpoints.VERSION}${Endpoints.JOKES}${Endpoints.JOKES_RANDOM}`, disallow)).json(); }).bind(this),
    byID: (async function (id) { 
      if(!id) throw new Error('ID_MISSING');
      if(isNaN(id)) throw new Error('ID_IS_NAN');
      return (await this.functions.get(`${Endpoints.VERSION}${Endpoints.JOKES}${Endpoints.JOKES_BY_ID}/${id}`)).json(); }).bind(this),
    byType: (async function (type) { 
      if(!type) throw new Error('TYPE_MISSING'); 
      if(!Object.keys(Category).includes(type.toUpperCase())) throw new TypeError('INVALID_TYPE');
      return (await this.functions.get(`${Endpoints.VERSION}${Endpoints.JOKES}${Endpoints.JOKES_BY_CATEGORY}/${type}`)).json(); }).bind(this),
  };
  images = {
    cat: (async function () { return (await this.functions.get(`${Endpoints.VERSION}${Endpoints.IMAGES}${Endpoints.IMAGES_CAT}`)).json(); }).bind(this),
    dog: (async function () { return (await this.functions.get(`${Endpoints.VERSION}${Endpoints.IMAGES}${Endpoints.IMAGES_DOG}`)).json(); }).bind(this),
    wolf: (async function () { return (await this.functions.get(`${Endpoints.VERSION}${Endpoints.IMAGES}${Endpoints.IMAGES_WOLF}`)).json(); }).bind(this),
  };
};
module.exports = NightAPI;