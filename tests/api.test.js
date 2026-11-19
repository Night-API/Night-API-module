// Tests d'intégration : NIGHT_API_KEY=... [NIGHT_API_URL=http://localhost:3001] npm test
const { test } = require('node:test');
const assert = require('node:assert');
const { NightAPI, NightAPIError } = require('../lib');

const key = process.env.NIGHT_API_KEY;
const api = key ? new NightAPI(key, { baseUrl: process.env.NIGHT_API_URL }) : null;
const opts = { skip: !key && 'NIGHT_API_KEY non défini' };

test('constructeur', () => {
  assert.throws(() => new NightAPI(''), /missing/);
  assert.ok(new NightAPI('Bearer abc').token === 'abc');
});

test('validation locale', () => {
  const local = new NightAPI('x');
  assert.throws(() => local.jokes.byCategory('nope'), TypeError);
  assert.throws(() => local.captcha.generate(2), /between 4 and 10/);
  assert.throws(() => local.animals.dog(-1), TypeError);
});

test('clé valide', opts, async () => assert.strictEqual(await api.verify(), true));

test('blagues', opts, async () => {
  const r = await api.jokes.random({ disallow: ['dark', 'limit'] });
  assert.strictEqual(r.status, 200);
  assert.ok(!['dark', 'limit'].includes(r.content.type));
  assert.strictEqual((await api.jokes.byCategory('dev')).content.type, 'dev');
});

test('images', opts, async () => {
  const dog = await api.animals.dog(0);
  assert.strictEqual(dog.content.id, 0);
  assert.match(dog.content.url, /^https?:\/\//);
  assert.strictEqual((await api.sfw.coffee()).status, 200);
});

test('utilitaires', opts, async () => {
  const qr = await api.qrcode.generate({ text: 'https://night-api.com' });
  const read = await api.qrcode.read(Buffer.from(qr.content.data));
  assert.strictEqual(read.content.target, 'https://night-api.com');
  const cap = await api.captcha.generate(6);
  assert.strictEqual(cap.content.code.length, 6);
  assert.match((await api.utils.textToAscii('Hi')).content.ascii, /_/);
});

test('fun', opts, async () => {
  assert.ok((await api.fun.disquette({ lang: 'fr' })).content.text);
  assert.strictEqual((await api.fun.tictactoe(['X', 'X', '', '', 'O', '', '', '', ''])).content.move, 2);
});

test('throwOnError', opts, async () => {
  const strict = new NightAPI(key, { baseUrl: process.env.NIGHT_API_URL, throwOnError: true });
  await assert.rejects(() => strict.jokes.byID(999999), NightAPIError);
});
