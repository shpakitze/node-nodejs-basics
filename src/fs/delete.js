/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import FsError from '../utils/fserror.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  // Write your code here
  try {
    await fs.unlink(path.join(__dirname, 'files/fileToRemove.txt'));
  } catch (error) {
    throw new FsError('FS operation failed');
  }
};
