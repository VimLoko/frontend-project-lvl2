import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';

test('compare Flat JSON', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.json`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.json`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultnested.txt`, 'utf8');

  expect(genDiff(file1, file2)).toBe(result);
});

test('compare Flat YML', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.yml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.yml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultnested.txt`, 'utf8');

  expect(genDiff(file1, file2)).toBe(result);
});

test('compare Flat AYML', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.ayml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.ayml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultnested.txt`, 'utf8');

  expect(genDiff(file1, file2)).toBe(result);
});
