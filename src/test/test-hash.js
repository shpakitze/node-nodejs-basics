import { calculateHash } from '../hash/calcHash.js';

try {
  console.log(await calculateHash());
} catch (error) {
  console.error(error.message);
}
