import fs from 'fs';
import zlib from 'zlib';

/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToCompress.txt');
const outFilePath = path.join(__dirname, 'files/archive.gz');

export const compress = async () => {
  // Write your code here
  const readableStream = fs.createReadStream(filePath);
  const writeableStream = fs.createWriteStream(outFilePath);
  const gzip = zlib.createGzip();
  readableStream.pipe(gzip).pipe(writeableStream);
};
