/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import {
  readdir, copyFile, mkdir,
} from 'fs/promises';
import path from 'path';
import FsError from '../utils/fserror.js';

export const copy = async (src, dest) => {
  // Write your code here
  const result = [];
  try {
    const currentDir = await readdir(src, { withFileTypes: true });
    await mkdir(dest);
    for (const file of currentDir) {
      if (file.isDirectory()) {
        result.push(copy(path.join(src, file.name), path.join(dest, file.name)));
      } else {
        result.push(copyFile(path.join(src, file.name), path.join(dest, file.name)));
      }
    }
    await Promise.all(result);
  } catch (error) {
    throw new FsError('FS operation failed');
  }
};
