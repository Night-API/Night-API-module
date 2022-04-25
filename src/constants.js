module.exports.Endpoints = {
    BASE: "https://night-api.com", VERSION: "/v1", TEST_TOKEN: "/test-token",
    JOKES: "/jokes", IMAGES: "/images",
    JOKES_RANDOM: "/random", JOKES_BY_ID: "/id", JOKES_BY_CATEGORY: "/type",
    IMAGES_CAT: "/cat", IMAGES_DOG: "/dog", IMAGES_WOLF: "/wolf",
};
module.exports.http = {
    version: 1,
    api: 'https://night-api.com',
    cdn: 'https://cdn.night-api.com',
};
module.exports.Categories = ["global", "dev", "dark", "limit", "beauf", "blondes"];
module.exports.Category = {
    GLOBAL: "global",
    DEV: "dev",
    DARK: "dark",
    LIMIT: "limit",
    BEAUF: "beauf",
    BLONDES: "blondes",
};