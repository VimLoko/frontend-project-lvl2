import { readFileSync } from 'fs';
import { extname } from 'path';
import parser from './parsers.js';
import ast from './ast.js';
import formatter from './formatters/index.js';

const readFile = (path) => readFileSync(path, 'utf8');
const getFileExt = (file) => extname(file).slice(1).toLowerCase();

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fileOneData = readFile(filepath1);
  const fileTwoData = readFile(filepath2);
  const fileOneExt = getFileExt(filepath1);
  const fileTwoExt = getFileExt(filepath2);
  const fileOneParsed = parser(fileOneData, fileOneExt);
  const fileTwoParsed = parser(fileTwoData, fileTwoExt);
  const astObj = ast(fileOneParsed, fileTwoParsed);
  return formatter(astObj, format);
};

export default genDiff;
