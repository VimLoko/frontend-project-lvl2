import _ from 'lodash';
import { readFileSync } from 'fs';
import { extname } from 'path';
import parser from './parsers.js';
import ast from './ast.js';
import formatter from './formatters/index.js';

const readFile = (path) => readFileSync(path, 'utf8');
const getFileExt = (file) => extname(file).slice(1).toLowerCase();
// const format = (result) => `{\n${result.join('\n')}\n}`;
// const compare = (key, obj1, obj2) => {
//   const obj1hasKey = _.has(obj1, key);
//   const obj2hasKey = _.has(obj2, key);
//   const obj1Value = obj1[key];
//   const obj2Value = obj2[key];
//   if (obj1hasKey && !obj2hasKey) {
//     return `  - ${key}: ${obj1[key]}`;
//   }
//   if (!obj1hasKey && obj2hasKey) {
//     return `  + ${key}: ${obj2[key]}`;
//   }
//   if (obj1hasKey && obj2hasKey && (obj1Value !== obj2Value)) {
//     return [`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`];
//   }
//   return `    ${key}: ${obj1[key]}`;
// };

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

// genDiff('__fixtures__/file1nested.json', '__fixtures__/file2nested.json');

export default genDiff;
