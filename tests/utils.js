const { readFileSync } = require("fs");

module.exports = async function Utils(api) {
    try {
        api.qrcode.generate({ text: "https://night-api.com" }).catch(() => { throw new Error("QRcode.generate() failed")});
        api.qrcode.read(readFileSync('./tests/qrcode.png')).catch(() => { throw new Error("QRcode.read() failed") });
        api.captcha.generate(5).catch(() => { throw new Error("Captcha.generate() failed") });
    } catch(e) {
        throw new Error(e);
    }
};