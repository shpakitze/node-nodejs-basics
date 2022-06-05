/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { read } from '../fs/read.js';

try {
  await read();
} catch (error) {
  console.error(error.message);
}
