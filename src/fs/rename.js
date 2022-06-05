/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import FsError from '../utils/fserror.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  // Write your code here
  try {
    await fs.rename(path.join(__dirname, 'files/wrongFilename.txt'), path.join(__dirname, 'files/properFilename.md'));
  } catch (error) {
    throw new FsError('FS operation failed');
  }
};
