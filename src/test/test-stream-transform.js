/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { transform } from '../streams/transform.js';

try {
  await transform();
} catch (error) {
  console.error(error.message);
}
