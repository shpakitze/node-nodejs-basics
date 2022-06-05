/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import FsError from '../utils/fserror.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const read = async () => {
  // Write your code here

  try {
    const stream = await fs.readFile(path.join(__dirname, 'files/fileToRead.txt'), 'utf-8');
    console.log(stream);
  } catch (error) {
    throw new FsError('FS operation failed');
  }
};
