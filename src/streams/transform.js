import { Transform } from 'stream';
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToWrite.txt');
export const transform = async () => {
  // Write your code here
  const rev = new Transform();
  rev._transform = (chunk, encoding, callback) => {
    rev.push(chunk.toString().split('').reverse().join(''));
    callback();
  };
  const writeableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(rev).pipe(writeableStream);
};
