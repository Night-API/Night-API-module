declare module 'night-api' {
    export class NightAPI {
        public constructor(token?: NightOptions);
        public constructor(token: NightOptions);

        // public ownerID: Snowflake | Snowflake[];
        // public util: ClientUtil;

        // public isOwner(user: UserResolvable): boolean;
    }

    export interface NightOptions {
        token?: String;
    }
}