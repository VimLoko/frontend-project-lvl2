import _ from 'lodash';
import parser from './parsers.js';

const readFile = (path) => parser(path);
const format = (result) => `{\n${result.join('\n')}\n}`;
const compare = (key, obj1, obj2) => {
  const obj1hasKey = _.has(obj1, key);
  const obj2hasKey = _.has(obj2, key);
  const obj1Value = obj1[key];
  const obj2Value = obj2[key];
  if (obj1hasKey && !obj2hasKey) {
    return `  - ${key}: ${obj1[key]}`;
  }
  if (!obj1hasKey && obj2hasKey) {
    return `  + ${key}: ${obj2[key]}`;
  }
  if (obj1hasKey && obj2hasKey && (obj1Value !== obj2Value)) {
    return [`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`];
  }
  return `    ${key}: ${obj1[key]}`;
};

const genDiff = (filepath1, filepath2) => {
  const fileOne = readFile(filepath1);
  const fileTwo = readFile(filepath2);
  const objKeys = _.uniq([...Object.keys(fileOne), ...Object.keys(fileTwo)]);
  const result = objKeys.sort().reduce((acc, key) => acc.concat(compare(key, fileOne, fileTwo)),
    []);
  return format(result);
};

export default genDiff;
