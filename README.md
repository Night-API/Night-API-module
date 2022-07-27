[![Discord](https://img.shields.io/discord/832296913695932428?color=informational&logo=discord&logoColor=white)](https://discord.gg/jH6wB3B6s8)
[![NPM](https://img.shields.io/npm/v/night-api?color=crimson&logo=npm)](https://www.npmjs.com/package/night-api)
[![Download](https://img.shields.io/npm/dt/night-api)](https://www.npmjs.com/package/night-api)


# NightAPI

Ce paquet Npm fourni une interface pour intéragir avec
[Night-API](https://night-api.com).</br></br>
<strong>Voici la documentation pour vous retrouver plus facilement [Night-API module documentation](https://docs.night-api.com)</strong>

## Installation

Vous pouvez simplement installer la dépendance à votre projet depuis Npm:

```shell
npm install night-api
```

Ou

```shell
yarn add night-api
```


## Mise en place

### Importation

```js
// ES6 (includes typings)
import { NightAPI } from 'night-api';

// CommonJS
const { NightAPI } = require('night-api');
```

### Initialisation

Pour utiliser l'API, vous avez besoin d'une **clé d'authentification** que vous
pouvez obtenir en vous connectant sur [Night-API](https://night-api.com/)

```js
const api = new NightAPI('VOTRE_TOKEN_ICI');
```

## Utilisation

### Blague aléatoire

```js
const blague = await api.jokes.random();
```

A cette méthode, vous pouvez spécifier certains types que vous ne souhaitez pas
recevoir.

```js
const blague = await api.jokes.random({
  disallow: ['dark', 'limit']
});
```

### Blague aléatoire d'une catégorie

```js
const blague = await api.jokes.byType('global');
```

### Blague à partir de son ID

Les blagues sont identifiées par un ID que vous recevez en même tant que chaque
blague.

Spécifiez cet identifiant en paramètre et vous l'obtiendez à nouveau.

```js
const blague = await api.jokes.byID(44);
```

## Valeur retournée

```js
// console.log(blague);

{
    "status": 200,
    "content": {
        "id": 44,
        "type": "global",
        "blague": "Que dit un canard quand il va aux toilettes ?",
        "reponse": "Je vais au petit coin."
    }
}
```

<strong>Pour voir le reste des fonctionalités du module je vous invite à lire notre [documentation](https://docs.night-api.com)</strong>
