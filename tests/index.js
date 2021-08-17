const NightAPI = require('night-api');
const api = new NightAPI("ZzkQJW9mfX-2iCp6WGXvNgWzhRPQitv-wJzIrRpg19");

async function blague() {
    const blague = await api.jokes.random({ disallow: ['global', 'limit', 'beauf', 'dark', 'blondes'] });
    console.log(blague)
};
blague();