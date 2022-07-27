module.exports = async function SFW(api) {
    try {
        api.sfw.coffee().catch(() => { throw new Error("SFW.coffee() failed")});
        api.sfw.food(1).catch(() => { throw new Error("SFW.food() failed") });
        api.sfw.holo().catch(() => { throw new Error("SFW.holo() failed") });
        api.sfw.kanna(2).catch(() => { throw new Error("SFW.kanna() failed") });
    } catch(e) {
        throw new Error(e);
    }
};