import { Jokes, Animals, SFW, NSFW, Games } from './API';
export declare class NightAPI {
    token: string;
    constructor(token: string);
}
export interface NightAPI {
    token: string;
    jokes: Jokes;
    animals: Animals;
    sfw: SFW;
    nsfw: NSFW;
    games: Games;
}
//# sourceMappingURL=index.d.ts.map