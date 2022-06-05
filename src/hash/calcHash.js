/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');
export const calculateHash = async () => {
  // Write your code here

  const hash = crypto.createHash('sha256');
  const input = await readFile(filePath, 'utf-8');
  return hash.update(input).digest('hex');
};
