/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { copy } from '../fs/copy.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(path.join(__dirname, '../fs/files'));
try {
  await copy(path.join(__dirname, '../fs/files'), path.join(__dirname, '../fs/files-copy'));
} catch (error) {
  console.error(error.message);
}
