const Nightapi = require("./src/NightAPI");
function NightAPI(token) { return new Nightapi(token); };
NightAPI.API = Nightapi; NightAPI.version = require("./package.json").version;
module.exports = NightAPI;