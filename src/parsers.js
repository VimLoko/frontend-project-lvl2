import yaml from 'js-yaml';
import { extname } from 'path';
import { readFileSync } from 'fs';

const parsersObj = {
  json: JSON.parse,
  yml: yaml.load,
  ayml: yaml.load,
};
const getFileExt = (file) => extname(file).slice(1).toLowerCase();
const parser = (path) => {
  const fileExt = getFileExt(path);
  return parsersObj[fileExt](readFileSync(path, 'utf8'));
};

export default parser;
