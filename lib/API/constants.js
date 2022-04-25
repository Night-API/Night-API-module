"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = exports.Endpoints = void 0;
const Endpoints = {
    TestToken: "/test-token",
    Functionals: { Random: "/random", ByID: "/id", ByCategory: "/type" },
    Jokes: {
        _: "/jokes",
    },
    Images: {
        _: "/images",
        Animals: { dog: "/dog", cat: "/cat", wolf: "/wolf" },
        SFW: { _: "/sfw" },
        NSFW: { _: "/nsfw" },
    },
    Games: {
        _: "/game",
        Minecraft: "/minecraft",
        GarrysMod: "/garrysmod",
        FiveM: "/fivem",
    }
};
exports.Endpoints = Endpoints;
const http = {
    version: 1,
    api: 'https://night-api.com',
    cdn: 'https://cdn.night-api.com',
};
exports.http = http;
//# sourceMappingURL=constants.js.map