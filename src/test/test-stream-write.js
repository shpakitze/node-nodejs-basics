/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { write } from '../streams/write.js';

try {
  await write();
} catch (error) {
  console.error(error.message);
}
