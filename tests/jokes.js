module.exports = async function jokes(api) {
    try {
        api.jokes.random().catch(err => new Error("Jokes.random() failed")); // { disallow: ['global', 'limit', 'beauf', 'dark', 'blondes'] }
        api.jokes.byID(1).catch(err => new Error("Jokes.byID() failed"));
        api.jokes.byCategory('dark').catch(err => new Error("Jokes.byCategory() failed"));
    } catch(e) {
        throw new Error("Jokes() failed");
    }
};