module.exports = async function jokes(api) {
    try {
        api.jokes.random().catch(() => { throw new Error("Jokes.random() failed") }); // { disallow: ['global', 'limit', 'beauf', 'dark', 'blondes'] }
        api.jokes.random({ disallow: "dark" }).catch(() => { throw new Error("Jokes.random({ disallow: \"dark\" }) failed") }); // { disallow: ['global', 'limit', 'beauf', 'dark', 'blondes'] }
        api.jokes.byID(1).catch(() => { throw new Error("Jokes.byID() failed") });
        api.jokes.byCategory('dark').catch(() => { throw new Error("Jokes.byCategory() failed") });
    } catch(e) {
        throw new Error(e);
    }
};