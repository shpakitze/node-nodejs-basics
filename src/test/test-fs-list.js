/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { list } from '../fs/list.js';

try {
  await list();
} catch (error) {
  console.error(error.message);
}
