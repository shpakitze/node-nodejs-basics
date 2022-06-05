import { compress } from '../zip/compress.js';

try {
  await compress();
} catch (error) {
  console.log(error);
}
