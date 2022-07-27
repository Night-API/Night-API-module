import Functions from './functions';
import { Endpoints } from './API/constants';
import { Jokes, Animals, SFW, NSFW, Games, Captcha, QRcode } from './API';

export class NightAPI {
    constructor(public token: string) {
        if (!token) throw new Error('The API key is missing.');
        if (typeof token !== 'string') throw new Error('An invalid API key was provided.');
        token = token.replace(/^(Api|Bearer|API)\s*/i, '');
        const functions: any = new Functions(token);
        (async function () {
            const response = await (await functions.get(Endpoints.TestToken));
            if (response.status !== 200) throw new Error('An invalid API key was provided.');
        })();
        
        this.jokes = new Jokes(token);
        this.animals = new Animals(token);
        this.sfw = new SFW(token);
        this.nsfw = new NSFW(token);
        this.games = new Games(token);
        this.captcha = new Captcha(token);
        this.qrcode = new QRcode(token);
    };
};

export interface NightAPI {
    token: string;
    jokes: Jokes;
    animals: Animals;
    sfw: SFW;
    nsfw: NSFW;
    games: Games;
    captcha: Captcha;
    qrcode: QRcode;
};