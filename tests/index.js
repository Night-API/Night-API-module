const { NightAPI } = require('../lib');
const api = new NightAPI("ZzkQJW9mfX-2iCp6WGXvNgWzhRPQitv-wJzIrRpg19");

(async () => {
    try {
        await require('./animals')(api);
        await require('./games')(api);
        await require('./jokes')(api);
        await require('./nsfw')(api);
        await require('./sfw')(api);
        await require('./utils')(api);
    } catch(e) {
        console.log(e);
        console.log("Some tests failed!");
    };
})();