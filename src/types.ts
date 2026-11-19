export type JokeType = 'global' | 'dev' | 'dark' | 'limit' | 'beauf' | 'blondes';
export type Animal = 'dog' | 'cat' | 'fox' | 'wolf' | 'giraffe' | 'kangaroo' | 'lion' | 'quokka' | 'lezard' | 'leopard' | 'singes' | 'paon' | 'hamster' | 'koala';
export type SFWType = 'coffee' | 'food' | 'holo' | 'kanna';
export type NSFWType = 'anal' | 'ass' | 'boobs' | 'gonewild' | 'hanal' | 'hass' | 'hboobs' | 'hentai' | 'hkitsune' | 'hmidriff' | 'hneko' | 'hthigh' | 'neko' | 'paizuri' | 'pgif' | 'pussy' | 'tentacle' | 'thigh' | 'yaoi';

export interface Joke { id: number; type: JokeType; blague: string; reponse: string }
export interface Image { id: number; type: string; url: string }
export interface SerializedBuffer { type: 'Buffer'; data: number[] }
export interface Captcha { code: string; codeSize: number; image: SerializedBuffer }
export interface QRCodeRead { type: 'link' | 'text' | 'wifi' | 'tel' | 'sms' | 'email' | 'geo' | 'vcard' | 'vcalendar' | 'vevent'; target: string; data?: Record<string, unknown> }
export interface PickupLine { id: number; lang: string; spicy: boolean; text: string }
export interface IpInfo {
  ip: string;
  country?: { iso_code?: string; names?: Record<string, string> };
  city?: { names?: Record<string, string> };
  location?: { latitude?: number; longitude?: number; time_zone?: string };
  autonomous_system_number?: number | null;
  autonomous_system_organization?: string | null;
  is_v4: boolean;
  is_v6: boolean;
  privacy: Record<string, boolean | null>;
}
export type GameServer = Record<string, unknown> & { name?: string; map?: string; maxplayers?: number; players?: unknown[]; ping?: number; connect?: string };

export interface QRCodeOptions {
  text: string;
  size?: number;
  colorDark?: string;
  colorLight?: string;
  margin?: number;
  autoColor?: boolean;
  /** URL https, data URL ou base64 */
  backgroundImage?: string;
  backgroundDimming?: string;
  /** URL https, data URL ou base64 */
  logoImage?: string;
  logoCornerRadius?: number;
}
