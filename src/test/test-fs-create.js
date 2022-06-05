/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { create } from '../fs/create.js';

try {
  await create();
} catch (error) {
  console.error(error.message);
}
