import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';

test('compare JSON', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.json`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.json`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultnested.txt`, 'utf8');

  expect(genDiff(file1, file2)).toBe(result);
});

test('compare YAML', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.yml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.yml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultnested.txt`, 'utf8');

  expect(genDiff(file1, file2)).toBe(result);
});

test('compare AYML', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.ayml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.ayml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultnested.txt`, 'utf8');

  expect(genDiff(file1, file2)).toBe(result);
});

test('compare JSON (result plain text)', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.json`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.json`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultplain.txt`, 'utf8');

  expect(genDiff(file1, file2, 'plain')).toBe(result);
});

test('compare YAML (result plain text)', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.yml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.yml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultplain.txt`, 'utf8');

  expect(genDiff(file1, file2, 'plain')).toBe(result);
});

test('compare AYML (result plain text)', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.ayml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.ayml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultplain.txt`, 'utf8');

  expect(genDiff(file1, file2, 'plain')).toBe(result);
});

test('compare JSON (result json)', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.json`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.json`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultjson.txt`, 'utf8');

  expect(genDiff(file1, file2, 'json')).toBe(result);
});

test('compare YAML (result json)', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.yml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.yml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultjson.txt`, 'utf8');

  expect(genDiff(file1, file2, 'json')).toBe(result);
});

test('compare AYML (result json)', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file1 = `${__dirname}/../__fixtures__/file1nested.ayml`;
  const file2 = `${__dirname}/../__fixtures__/file2nested.ayml`;
  const result = readFileSync(`${__dirname}/../__fixtures__/resultjson.txt`, 'utf8');

  expect(genDiff(file1, file2, 'json')).toBe(result);
});
