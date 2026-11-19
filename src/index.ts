import { assertId, Client, NightAPIError, toImageInput, type ClientOptions, type NightResponse } from './client';
import type {
  Animal, Captcha, GameServer, Image, IpInfo, Joke, JokeType, NSFWType, PickupLine, QRCodeOptions, QRCodeRead, SerializedBuffer, SFWType,
} from './types';

export * from './types';
export { NightAPIError, type ClientOptions, type NightResponse };

const JOKE_TYPES: JokeType[] = ['global', 'dev', 'dark', 'limit', 'beauf', 'blondes'];
const ANIMALS: Animal[] = ['dog', 'cat', 'fox', 'wolf', 'giraffe', 'kangaroo', 'lion', 'quokka', 'lezard', 'leopard', 'singes', 'paon', 'hamster', 'koala'];
const SFW: SFWType[] = ['coffee', 'food', 'holo', 'kanna'];
const NSFW: NSFWType[] = ['anal', 'ass', 'boobs', 'gonewild', 'hanal', 'hass', 'hboobs', 'hentai', 'hkitsune', 'hmidriff', 'hneko', 'hthigh', 'neko', 'paizuri', 'pgif', 'pussy', 'tentacle', 'thigh', 'yaoi'];

/* --------------------------------- Blagues -------------------------------- */
export class Jokes {
  constructor(private c: Client) {}

  /** Blague aléatoire. `disallow` exclut des catégories. */
  random(options?: { disallow?: JokeType | JokeType[] }) {
    const disallow = options?.disallow === undefined ? undefined : ([] as JokeType[]).concat(options.disallow);
    if (disallow?.some((d) => !JOKE_TYPES.includes(d))) throw new TypeError(`"disallow" must be one of: ${JOKE_TYPES.join(', ')}`);
    return this.c.get<Joke>('/jokes/random', { disallow });
  }

  byID(id: number | string) {
    return this.c.get<Joke>(`/jokes/id/${assertId(id)}`);
  }

  byCategory(category: JokeType) {
    if (!JOKE_TYPES.includes(category?.toLowerCase() as JokeType)) throw new TypeError('Invalid "category" type provided');
    return this.c.get<Joke>(`/jokes/type/${category.toLowerCase()}`);
  }

  /** Alias de byCategory (nom utilisé dans l'ancien README) */
  byType(category: JokeType) {
    return this.byCategory(category);
  }
}

/* ------------------------------ Images (base) ----------------------------- */
abstract class ImageCategory<T extends string> {
  constructor(protected c: Client, private readonly category: string) {}

  /** Image aléatoire, toutes catégories confondues */
  random() {
    return this.c.get<Image>(`/images/${this.category}/random`);
  }

  /** Liste des types disponibles et nombre d'images */
  types() {
    return this.c.get<{ type: string; count: number }[]>(`/images/${this.category}/types`);
  }

  /** Image aléatoire d'un type, ou précise si `id` est fourni */
  get(type: T, id?: number) {
    const n = assertId(id);
    return this.c.get<Image>(`/images/${this.category}/${type}${n === undefined ? '' : `/${n}`}`);
  }
}

export class Animals extends ImageCategory<Animal> {
  constructor(c: Client) {
    super(c, 'animals');
  }
  dog = (id?: number) => this.get('dog', id);
  cat = (id?: number) => this.get('cat', id);
  fox = (id?: number) => this.get('fox', id);
  wolf = (id?: number) => this.get('wolf', id);
  giraffe = (id?: number) => this.get('giraffe', id);
  kangaroo = (id?: number) => this.get('kangaroo', id);
  lion = (id?: number) => this.get('lion', id);
  quokka = (id?: number) => this.get('quokka', id);
  lezard = (id?: number) => this.get('lezard', id);
  leopard = (id?: number) => this.get('leopard', id);
  singes = (id?: number) => this.get('singes', id);
  paon = (id?: number) => this.get('paon', id);
  hamster = (id?: number) => this.get('hamster', id);
  koala = (id?: number) => this.get('koala', id);
  static readonly list = ANIMALS;
}

export class SFWImages extends ImageCategory<SFWType> {
  constructor(c: Client) {
    super(c, 'sfw');
  }
  coffee = (id?: number) => this.get('coffee', id);
  food = (id?: number) => this.get('food', id);
  holo = (id?: number) => this.get('holo', id);
  kanna = (id?: number) => this.get('kanna', id);
  static readonly list = SFW;
}

export class NSFWImages extends ImageCategory<NSFWType> {
  constructor(c: Client) {
    super(c, 'nsfw');
  }
  /** Image précise par ID global */
  byID(id: number) {
    return this.c.get<Image>(`/images/nsfw/${assertId(id)}`);
  }
  anal = (id?: number) => this.get('anal', id);
  ass = (id?: number) => this.get('ass', id);
  boobs = (id?: number) => this.get('boobs', id);
  gonewild = (id?: number) => this.get('gonewild', id);
  hanal = (id?: number) => this.get('hanal', id);
  hass = (id?: number) => this.get('hass', id);
  hboobs = (id?: number) => this.get('hboobs', id);
  hentai = (id?: number) => this.get('hentai', id);
  hkitsune = (id?: number) => this.get('hkitsune', id);
  hmidriff = (id?: number) => this.get('hmidriff', id);
  hneko = (id?: number) => this.get('hneko', id);
  hthigh = (id?: number) => this.get('hthigh', id);
  neko = (id?: number) => this.get('neko', id);
  paizuri = (id?: number) => this.get('paizuri', id);
  pgif = (id?: number) => this.get('pgif', id);
  pussy = (id?: number) => this.get('pussy', id);
  tentacle = (id?: number) => this.get('tentacle', id);
  thigh = (id?: number) => this.get('thigh', id);
  yaoi = (id?: number) => this.get('yaoi', id);
  static readonly list = NSFW;
}

/* ------------------------------- Utilitaires ------------------------------ */
export class QRcode {
  constructor(private c: Client) {}

  generate(options: QRCodeOptions) {
    if (!options || typeof options !== 'object') throw new TypeError('The options must be an object');
    if (!options.text) throw new Error('"text" option is missing');
    if (options.size !== undefined && Number.isNaN(Number(options.size))) throw new TypeError('The option "size" must be a Number');
    if (options.autoColor !== undefined && typeof options.autoColor !== 'boolean') throw new TypeError('The option "autoColor" must be a boolean');
    return this.c.post<SerializedBuffer>('/images/qrcode', options);
  }

  /** Lit un QR code depuis un Buffer, du base64 ou une URL https */
  read(image: Buffer | string) {
    if (!image) throw new Error('The "image" option is missing');
    return this.c.post<QRCodeRead>('/images/qrcode/reader', { image: toImageInput(image) });
  }
}

export class CaptchaGenerator {
  constructor(private c: Client) {}

  generate(codeSize = 6) {
    if (!Number.isInteger(codeSize) || codeSize < 4 || codeSize > 10) throw new Error('The "codeSize" option must be between 4 and 10');
    return this.c.post<Captcha>('/images/captcha', { codeSize });
  }
}

export class Utils {
  constructor(private c: Client) {}

  ipinfo(ip: string) {
    if (!ip || typeof ip !== 'string') throw new TypeError('The IP must be a string');
    return this.c.get<IpInfo>(`/general/ipinfo/${encodeURIComponent(ip)}`);
  }

  textToAscii(text: string, font = 'Standard') {
    return this.c.get<{ font: string; ascii: string }>('/utils/ascii', { text, font });
  }

  asciiFonts() {
    return this.c.get<string[]>('/utils/ascii/fonts');
  }

  imageToAscii(image: Buffer | string, width = 80) {
    return this.c.post<{ width: number; ascii: string }>('/images/ascii', { image: toImageInput(image), width });
  }
}

/* --------------------------------- Jeux ----------------------------------- */
export class Games {
  constructor(private c: Client) {}

  private server(type: string, ip: string) {
    if (!ip || typeof ip !== 'string') throw new Error('The IP is required for Games servers and must be a string');
    return this.c.get<GameServer>(`/game/${type}/${encodeURIComponent(ip)}`);
  }
  minecraft = (ip: string) => this.server('minecraft', ip);
  garrysmod = (ip: string) => this.server('garrysmod', ip);
  fivem = (ip: string) => this.server('fivem', ip);
}

/* ---------------------------------- Fun ----------------------------------- */
export class Fun {
  constructor(private c: Client) {}

  /** Disquette (phrase de drague) aléatoire */
  disquette(options: { lang?: string; spicy?: boolean } = {}) {
    return this.c.get<PickupLine>('/fun/disquette', { lang: options.lang, spicy: options.spicy });
  }

  /** Meilleur coup au morpion (minimax) */
  tictactoe(board: ('X' | 'O' | '')[], player: 'X' | 'O' = 'O') {
    if (!Array.isArray(board) || board.length !== 9) throw new TypeError('"board" must be an array of 9 cells');
    return this.c.post<{ move: number | null; board?: string[]; winner: string | null }>('/fun/tictactoe', { board, player });
  }
}

/* ------------------------------- Point d'entrée --------------------------- */
export class NightAPI {
  readonly jokes: Jokes;
  readonly animals: Animals;
  readonly sfw: SFWImages;
  readonly nsfw: NSFWImages;
  readonly games: Games;
  readonly captcha: CaptchaGenerator;
  readonly qrcode: QRcode;
  readonly utils: Utils;
  readonly fun: Fun;
  /** Client HTTP bas niveau, pour appeler une route pas encore couverte par le module */
  readonly client: Client;

  constructor(public token: string, options: ClientOptions = {}) {
    if (!token) throw new Error('The API key is missing.');
    if (typeof token !== 'string') throw new Error('An invalid API key was provided.');
    this.token = token.replace(/^(Api|Bearer)\s*/i, '');
    this.client = new Client(this.token, options);

    this.jokes = new Jokes(this.client);
    this.animals = new Animals(this.client);
    this.sfw = new SFWImages(this.client);
    this.nsfw = new NSFWImages(this.client);
    this.games = new Games(this.client);
    this.captcha = new CaptchaGenerator(this.client);
    this.qrcode = new QRcode(this.client);
    this.utils = new Utils(this.client);
    this.fun = new Fun(this.client);
  }

  /**
   * Vérifie la clé API. En v1 cette vérification se faisait dans le constructeur et faisait
   * planter le process (promesse rejetée non gérée) : elle est maintenant explicite.
   */
  async verify(): Promise<boolean> {
    try {
      const res = await this.client.get('/test-token');
      return res.status === 200;
    } catch {
      return false;
    }
  }
}

export default NightAPI;
