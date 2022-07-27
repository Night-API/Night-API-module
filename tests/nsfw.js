module.exports = async function NSFW(api) {
    try {
        api.nsfw.anal().catch(() => { throw new Error("NSFW.anal() failed") });
        api.nsfw.ass(3).catch(() => { throw new Error("NSFW.ass() failed") });
        api.nsfw.boobs().catch(() => { throw new Error("NSFW.boobs() failed") });
        api.nsfw.gonewild(6).catch(() => { throw new Error("NSFW.gonewild() failed") });
        api.nsfw.hanal().catch(() => { throw new Error("NSFW.hanal() failed") });
        api.nsfw.hass(3).catch(() => { throw new Error("NSFW.hass() failed") });
        api.nsfw.hboobs().catch(() => { throw new Error("NSFW.hboobs() failed") });
        api.nsfw.hentai(6).catch(() => { throw new Error("NSFW.hentai() failed") });
        api.nsfw.hkitsune().catch(() => { throw new Error("NSFW.hkitsune() failed") });
        api.nsfw.hmidriff(3).catch(() => { throw new Error("NSFW.hmidriff() failed") });
        setTimeout(() => {
            api.nsfw.hneko().catch(() => { throw new Error("NSFW.hneko() failed") });
            api.nsfw.hthigh(6).catch(() => { throw new Error("NSFW.hthigh() failed") });
            api.nsfw.neko().catch(() => { throw new Error("NSFW.neko() failed") });
            api.nsfw.paizuri(3).catch(() => { throw new Error("NSFW.paizuri() failed") });
            api.nsfw.pgif().catch(() => { throw new Error("NSFW.pgif() failed") });
            api.nsfw.pussy(6).catch(() => { throw new Error("NSFW.pussy() failed") });
            api.nsfw.tentacle().catch(() => { throw new Error("NSFW.tentacle() failed") });
            api.nsfw.thigh(3).catch(() => { throw new Error("NSFW.thigh() failed") });
            api.nsfw.yaoi().catch(() => { throw new Error("NSFW.yaoi() failed") });
        }, 2000);
    } catch(e) {
        throw new Error(e);
    }
};