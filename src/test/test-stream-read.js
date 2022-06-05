/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { read } from '../streams/read.js';

try {
  await read();
} catch (error) {
  console.error(error.message);
}
