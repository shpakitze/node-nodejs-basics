/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { constants } from 'fs';
import FsError from '../utils/fserror.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  try {
    await fs.access(filePath, constants.F_OK);
    throw new FsError('FS operation failed');
  } catch (error) {
    if (error.name === 'FS') {
      throw error;
    } else {
      console.log('write fle');
      await fs.appendFile(filePath, 'I am fresh and young');
    }
  }
};
