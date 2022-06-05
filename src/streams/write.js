/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToRead.txt');

export const write = async () => {
  // Write your code here
  const writeableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writeableStream);
};
