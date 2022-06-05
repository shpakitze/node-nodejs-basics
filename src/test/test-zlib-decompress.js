import { decompress } from '../zip/decompress.js';

try {
  await decompress();
} catch (error) {
  console.log(error);
}
