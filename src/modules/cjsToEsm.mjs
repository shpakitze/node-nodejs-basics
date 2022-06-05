/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import path from 'path';

import { release, version } from 'os';

import { createServer as createServerHttp } from 'http';

import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(
    await readFile(
      new URL('./files/a.json', import.meta.url),
    ),
  );
} else {
  unknownObject = JSON.parse(
    await readFile(
      new URL('./files/b.json', import.meta.url),
    ),
  );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export {
  unknownObject,
  createMyServer,
};