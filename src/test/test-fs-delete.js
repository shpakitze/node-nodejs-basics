/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { remove } from '../fs/delete.js';

try {
  await remove();
} catch (error) {
  console.error(error.message);
}
