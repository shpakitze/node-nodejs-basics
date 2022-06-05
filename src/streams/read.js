import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/* eslint-disable import/prefer-default-export */
export const read = async () => {
  // Write your code here
  const filePath = path.join(__dirname, 'files/fileToRead.txt');
  const readableStream = fs.createReadStream(filePath, 'utf8');
  readableStream.pipe(process.stdout);
};
