import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';

test('compare Flat JSON', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/flat1.json`;
  const file2 = `${__dirname}/../__fixtures__/flat2.json`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultflat.txt`, 'utf8');

  expect(genDiff(file1, file2)).toBe(result);
});
