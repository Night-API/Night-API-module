const Endpoints = {
    TestToken: "/test-token",
    Functionals: { Random: "/random", ByID: "/id", ByCategory: "/type" },
    Jokes: {
        _: "/jokes",
    },
    Images: {
        _: "/images", 
        Animals: { _: "/animals" },
        SFW: { _: "/sfw"},
        NSFW: { _: "/nsfw"},
        Captcha: { _: "/captcha" },
        QRcode: { _: "/qrcode", reader: "/reader" },
    },
    Games: {
        _: "/game",
        Minecraft: "/minecraft",
        GarrysMod: "/garrysmod",
        FiveM: "/fivem",
    }
};

const http = {
    api: 'https://api.night-api.com',
    cdn: 'https://cdn.night-api.com',
};

export { Endpoints, http };