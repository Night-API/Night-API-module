[![Discord](https://img.shields.io/discord/832296913695932428?color=informational&logo=discord&logoColor=white)](https://discord.gg/jH6wB3B6s8)
[![NPM](https://img.shields.io/npm/v/night-api?color=crimson&logo=npm)](https://www.npmjs.com/package/night-api)
[![Download](https://img.shields.io/npm/dt/night-api)](https://www.npmjs.com/package/night-api)

# Night-API

Module officiel pour [Night-API](https://night-api.com) : blagues, images (animaux, SFW, NSFW), QR codes, captchas,
infos IP, serveurs de jeux, ASCII art, disquettes… Typé (TypeScript), sans dépendance.

📚 Documentation complète (routes HTTP + module au même endroit) : **https://night-api.com/docs**

## Installation

```sh
npm install night-api
```

Node.js **18+** requis (utilise `fetch` natif).

## Démarrage

```js
// ESM / TypeScript
import { NightAPI } from 'night-api';
// CommonJS
const { NightAPI } = require('night-api');

const api = new NightAPI(process.env.NIGHT_API_KEY); // clé disponible sur https://night-api.com/dashboard
```

Options :

```js
new NightAPI(key, {
  baseUrl: 'https://api.night-api.com', // défaut
  timeout: 15000,       // ms
  retries: 1,           // nouvelle tentative automatique après un 429
  throwOnError: false,  // true : les erreurs rejettent la promesse (NightAPIError)
});
```

## Exemples

```js
await api.jokes.random({ disallow: ['dark', 'limit'] });
await api.jokes.byCategory('dev');
await api.jokes.byID(44);

await api.animals.dog();        // image aléatoire
await api.animals.cat(12);      // image précise
await api.animals.random();     // n'importe quel animal
await api.animals.types();      // liste + nombre d'images

await api.sfw.coffee();
await api.nsfw.neko();          // 18+

const qr = await api.qrcode.generate({ text: 'https://night-api.com', size: 500 });
fs.writeFileSync('qr.png', Buffer.from(qr.content.data));
await api.qrcode.read(fs.readFileSync('qr.png')); // { type: 'link', target: '…' }

const { content } = await api.captcha.generate(6); // content.code, content.image

await api.utils.ipinfo('8.8.8.8');
await api.utils.textToAscii('Night');
await api.games.minecraft('mc.hypixel.net');

await api.fun.disquette({ lang: 'fr' });
await api.fun.tictactoe(['X', 'X', '', '', 'O', '', '', '', '']);

await api.verify(); // true si la clé est valide
```

Toutes les méthodes renvoient `{ status, content }`, comme l'API.

## Migration depuis la v1

- Aucune méthode n'a été supprimée ; `jokes.byType` existe en alias de `byCategory`.
- La clé n'est plus vérifiée automatiquement dans le constructeur (ça faisait planter le process en cas de clé invalide) : utilisez `await api.verify()`.
- `axios` n'est plus une dépendance : Node 18 minimum.
- Nouveautés : `animals.random()`, `animals.types()`, `animals.koala()`, `nsfw.byID()`, `utils.*`, `fun.*`, options `retries` / `throwOnError`, types TypeScript complets.

## Tests

```sh
NIGHT_API_KEY=xxx npm test
```

## Licence

MIT — Night Group
