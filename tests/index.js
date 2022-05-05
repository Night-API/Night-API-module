const { NightAPI } = require('../lib');
const api = new NightAPI("API_KEY");

(async () => {
    try {
        await require('./animals')(api);
        await require('./games')(api);
        await require('./jokes')(api);
        await require('./nsfw')(api);
        await require('./sfw')(api);
    } catch(e) {
        console.error(e);
    };
    await console.log("All tests passed!");
})();