module.exports = async function NSFW(api) {
    try {
        api.nsfw.random().catch(err => new Error("NSFW.random() failed"));
        api.nsfw.byID(1).catch(err => new Error("NSFW.byID() failed"));
        api.nsfw.byCategory('pgif').catch(err => new Error("NSFW.byCategory() failed"));
    } catch(e) {
        throw new Error("NSFW() failed");
    }
};