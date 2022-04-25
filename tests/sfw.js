module.exports = async function SFW(api) {
    try {
        api.sfw.random().catch(err => new Error("SFW.random() failed"));
        api.sfw.byID(1).catch(err => new Error("SFW.byID() failed"));
        api.sfw.byCategory('food').catch(err => new Error("SFW.byCategory() failed"));
    } catch(e) {
        throw new Error("SFW() failed");
    }
};