module.exports = async function games(api) {
    try {
        api.games.minecraft("GG.PRISONFUN.COM").catch(() => { throw new Error("Games.minecraft() failed") });
        api.games.garrysmod("208.103.169.58").catch(() => { throw new Error("Games.garrysmod() failed") });
        api.games.fivem("play.blueislandrp.com").catch(() => { throw new Error("Games.fivem() failed") });
    } catch(e) {
        throw new Error(e);
    }
};