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
export const list = async () => {
  try {
    const currentDir = await fs.readdir(path.join(__dirname, 'files'), { withFileTypes: true });

    currentDir.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    throw new FsError('FS operation failed');
  }
  // Write your code here
};
