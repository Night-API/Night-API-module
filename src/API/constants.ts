const Endpoints = {
    TestToken: "/test-token",
    Functionals: { Random: "/random", ByID: "/id", ByCategory: "/type" },
    Jokes: {
        _: "/jokes",
    },
    Images: {
        _: "/images", 
        Animals: { dog: "/dog", cat: "/cat", wolf: "/wolf" },
        SFW: { _: "/sfw"},
        NSFW: { _: "/nsfw"},
    },
    Games: {
        _: "/game",
        Minecraft: "/minecraft",
        GarrysMod: "/garrysmod",
        FiveM: "/fivem",
    }
};

const http = {
    version: 1,
    api: 'https://night-api.com',
    cdn: 'https://cdn.night-api.com',
};

export { Endpoints, http };