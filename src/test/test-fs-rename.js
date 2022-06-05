/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { rename } from '../fs/rename.js';

try {
  await rename();
} catch (error) {
  console.error(error.message);
}
